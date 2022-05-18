
import fetch from 'auth/FetchInterceptor';
import Fetchdata from 'auth/SendlinkInterceptor'
import Forgotdata from 'auth/forgotInterceptor'
import { BaseUrl } from './BaseurlConst';

const JwtAuthService = {}


JwtAuthService.sendLink = function (data) {
	console.log('data123',data.token)
	
	return Fetchdata({
		url: BaseUrl + `/super/sendRegistrationLink?emailId=${data.request.email}`,
		method: 'POST',
		// headers: {
		// 	'Authorization':`Bearer ${data.token}`
		// },
		// data: data.token
	})
}


JwtAuthService.login = function (data) {
	console.log('data',data)
	return fetch({
		url: BaseUrl + '/auth/login',
		method: 'post',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		data: data
	})
}

JwtAuthService.signupverify = function (data) {
	return fetch({
		url: BaseUrl + '/user/verify',
		method: 'post',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		data: data
	})
}

JwtAuthService.loginverify = function (data) {
	return fetch({
		url: BaseUrl + '/user/genOtp',
		method: 'post',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		data: data
	})
}


JwtAuthService.signUp = function (data) {
	return fetch({
		url: BaseUrl + `/auth/register?token=${data.token}&emailId=${data.email}`,
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Authorization':`Bearer ${data.token}`
		},
		data: data
	})
}

JwtAuthService.passwordRequest = function (data) {
	console.log(data,'data')
	return Forgotdata({
		url: BaseUrl + `/auth/sendForgotPasswordLink?emailId=${data.email}`,
		method: 'post',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			// 'Authorization':`Bearer ${data.token}`
		},
		data: data
	})
}

JwtAuthService.forgotPassword = function (data) {
	// const payloadRequest = {
	// 	"otp":data.otp,
	// 	"newPassword":data.newPassword,
	// 	"confirmPassword":data.confirmPassword
	// }
	console.log(data,'datadata')
	return fetch({
		url: BaseUrl + `/auth/sendForgotPasswordLink?emailId=${data.email}`,
		method: 'post',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		data: data
	})
}


JwtAuthService.getProfile = function (data) {
	return fetch({
		url: BaseUrl + '/user/showUser',
		method: 'GET',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		data: data
	})
}

JwtAuthService.updateProfile = function (data) {
	const payloadRequest = {
		"first_name":data.first_name,
		"last_name":data.last_name,
		"duns_number":data.duns_number,
		"address":data.address,
		"cage":data.cage,
		"set_aside":data.set_aside,
		"corporate_certifications":data.corporate_certifications,
		"naics_code":data.naics_code,
		"keywords":data.keywords,
		"capability_briefing":data.capability_briefing,
		"website":data.website,
		"assignment_alerts":data.assignment_alerts,
		"opportunity_alerts":data.opportunity_alerts,
	}
	return fetch({
		url: BaseUrl + `/user/editUser`,
		method: 'post',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		data: payloadRequest
	})
}


JwtAuthService.profileAddUser = function (data) {
	const payloadRequest = {
		"id":data.id,
		"userName":data.userName,
		"firstName":data.first_name,
		"lastName":data.last_name,
		"title":data.title,
		"officeNumber":data.office_number,
		"email":data.Email,
		"roleName":data.role,
		"password":data.password,
        "cellNumber":data.cellNumber,
		"licenceType":data.licenceType
	}
	return fetch({
		url:'http://rfpintels-services.eastus.cloudapp.azure.com/userservices/user/updateAddUser',
		method: 'put',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		data: payloadRequest
	})
}

JwtAuthService.getProfileAddUsers = function (data) {
	console.log(data,'data111111111111111')
	return fetch({
		url: 'http://rfpintels-services.eastus.cloudapp.azure.com/userservices/user/getAllUser',
		method: 'GET',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		data: data
		
	})
}

JwtAuthService.updateAddProfile = function (data) {
	console.log(data,'data9999999999999999999999999')
	const payloadRequest = {
		"id":data.id,
		"userName":data.userName,
		"firstName":data.first_name,
		"lastName":data.last_name,
		"title":data.title,
		"officeNumber":data.office_number,
		"email":data.Email,
		"roleName":data.role,
		"password":data.password,
        "cellNumber":data.cellNumber,
		"licenceType":data.licenceType
	}
	console.log(payloadRequest,'payloadRequest')
	return fetch({
		url:'http://rfpintels-services.eastus.cloudapp.azure.com/userservices/user/updateAddUser',
		method: 'put',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		data: payloadRequest
	})
}

JwtAuthService.deleteUsers = function (data) {
	return fetch({
		url: `http://rfpintels-services.eastus.cloudapp.azure.com/userservices/user/deleteUser/${data.deleteid}`,
		method: 'DELETE',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		data: data
	})
}

JwtAuthService.changeProfilePassword = function (data) {
	const payloadRequest = {
		"oldPassword":data.oldPassword,
		"newPassword":data.newPassword,
		"confirmPassword":data.confirmPassword
	}
	return fetch({
		url:  `http://rfpintels-services.eastus.cloudapp.azure.com/userservices/user/changePassword`,
		method: 'post',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		data: payloadRequest
	})
}

JwtAuthService.uploadImage = function (data) {
	return fetch({
		url: BaseUrl + `/user/profile`,
		method: 'post',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		data: data
	})
}

JwtAuthService.getImage = function (data) {
	return fetch({
		url: BaseUrl + `/user/showProfile`,
		method: 'GET',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		data: data
	})
}

export default JwtAuthService
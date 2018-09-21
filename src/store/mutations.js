/**
 * 直接更新state多个方法的对象模块
 */

import {
	RECEIVE_USERINFO,
} from './mutation-types'

export default{
	/*
	[RECEIVE_ADDRESS](state,{address}){
		state.address = address
	},*/
	
	[RECEIVE_USERINFO](state,{userInfo}){
		state.userInfo = userInfo
	}
	
}

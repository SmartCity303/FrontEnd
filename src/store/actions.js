/**
 * 通过mutation间接更新status的多个方法的对象
 */

import {
	RECEIVE_USERINFO
} from './mutation-types'

import {
	reqUserInfo,
	
} from '../API'

export default{
	
	/*
	//异步获取地址
	async getAddress({commit,state}){
		//发送异步ajax请求
		const geohash = state.latitude + ',' + state.longitude
		const result = await reqAddress(geohash)
		//根据结果提交mutation
		if(result.code===0){
			const address = result.data
			commit(RECEIVE_ADDRESS,{address})
		}
	},*/
	
	//获取用户信息
	async getUserInfo({commit,state}){
		//发送异步Ajax请求
		const userid = state.userid;
		const result = await reqUserInfo(userid);
		//根据结果提交mutation
		if(result.code===0){
			const userInfo = result.data
			commit(RECEIVE_USERINFO,{userInfo})
		}
	}
	
	
}

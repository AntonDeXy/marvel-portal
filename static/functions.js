import axios from 'axios'
import md5 from 'md5'
import React, { useState, useEffect } from 'react'

export const getArticles = async (route) => {
  const baseUrl = `https://gateway.marvel.com:443/v1/public/${route}`
  const privateKey = '67d3094b052340b894a685576d342787ba35dde8'
  const publicKey = 'e2ea6d411120ada66be0368c2094101a'
  const ts = Math.floor(Math.random() * 9)
  const hash = md5(ts + privateKey + publicKey)
  let params
  const url = `${baseUrl}?${params ? `${params}&` : ''}ts=${ts}&apikey=${publicKey}&hash=${hash}`
  console.log(url)
  const res = await axios.get(url)
  return res.data.data.results
}

export const firstLettetToUpperCase = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
} 


export const getOtherInf = async (route) => {
  const baseUrl = {route}
  const privateKey = '67d3094b052340b894a685576d342787ba35dde8'
  const publicKey = 'e2ea6d411120ada66be0368c2094101a'
  const ts = Math.floor(Math.random() * 9)
  const hash = md5(ts + privateKey + publicKey)
  let params
  const url = `${baseUrl}?${params ? `${params}&` : ''}ts=${ts}&apikey=${publicKey}&hash=${hash}`
  const res = await axios.get(url)
  console.log(url)
  console.log(res.data.data.results)
  return res.data.data.results
}
import React from "react";

import { useState, useEffect } from "react";
import axios from "axios";

const useAxios = async ({
  url,
  body,
  params,
  method,
  Token
}) => {

  const urls = await
    params != null
    ? `${url}/${params}`
    : `${url}`;



  const datas = await axios({
    method: method,
    url: urls,
    data: body,
    headers: { Authorization: `Bearer ${Token}` }
  });

  return [datas.data.data];
};
export default useAxios;

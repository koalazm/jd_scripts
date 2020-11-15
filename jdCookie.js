/*
此文件为Node.js专用。其他用户请忽略
 */
//此处填写京东账号cookie。
//注：github action用户cookie填写到Settings-Secrets里面，新增JD_COOKIE，多个账号的cookie使用`&`隔开或者换行
let CookieJDs = [
  '__jdu=1604551260329498973932; areaId=28; ipLoc-djd=28-2487-3995-0; shshshfpb=gdoCzOtFIVAMhmUBdT3oAcg%3D%3D; shshshfpa=b8431bf9-3b94-2fb8-ad2e-5216bfcbef29-1594781543; mt_xid=V2_52007VwMVU1hcVlocThheBm8GGltVXlBSHUopCQJvAEZaDlFOXE9PG0AAN1ZHTg1YVwkDSBwJDWACEFBUWgZYL0oYXwR7AxJOXFxDWhxCHFwOZgYiUm1YYlkXSBtUBWULE1FtWlZbHQ%3D%3D; unpl=V2_ZzNtbUcCE0B9XEJULBAMDGJTF1RLURNAdQ0VBnkaWgxiUxNcclRCFnQURlRnGFgUZwAZWEpcQBRFCEdkexhdBGYKGlRKVXMVcQ8oVRUZVQAJbRYJFVMQQH0LTlR8SQ4DMgMibUFXcxRFCEFVfh1YBWQEE19BX0YdfABAVnMbXzVXAxpZcmeUvNveyvKvoPbS1YEiWURURRF0CUdXSxhsBFdVfF1DVkIUcAlGV3hUXAJmBhZZQlREFHcLTlFzEFQDZQsQXnJWcxY%3d; __jdv=122270672%7Cwww.linkstars.com%7Ct_1000089893_156_0_184__5ef5bd92916ac7d1%7Ctuiguang%7C4dad9e51f8a84a4887ad14bc32784a00%7C1604552006524; user-key=ce574788-b2ac-474e-bce9-0d89e62ee03e; cn=2; 3AB9D23F7A4B3C9B=KPPK7XNKGJZLXDL4MWXQY7HQCUPL725CWCOW4PV5ZVEL4W7M3SSM7KSOIKED3KZJAWYXT3OJZ4FH62YXSFW47OIEUA; wxa_level=1; jxsid=16051436333693676917; webp=1; __jda=122270672.1604551260329498973932.1604551260.1604968128.1605143633.5; __jdc=122270672; mba_muid=1604551260329498973932; visitkey=5176671842215984; autoOpenApp_downCloseDate_auto=1605143634769_21600000; jcap_dvzw_fp=babf6cb0b44bccf6d80bd6cdb738036a$904076457833; TrackerID=s9KOThcjIohnTGBw0SucJ1vqLR3og0pM07pZ12wsWuXie7vPsJqIPiJyBho7su81lG3IofySUjt2rhsC_iVeVzpG4kCGh1lLjVxuDmrDvWfQltnFF7vl5O2GJHcasrwH; pt_key=AAJfrIyCADCvOQLfPYfV4JmyDuRsQNZ6ls4CyiHDd1ut-aFjK5XRTgeR6fq6Z6IkVF60WwTbSLk; pt_pin=jordonin; pt_token=ilfk2hye; pwdt_id=jordonin; sfstoken=tk01mf6201d54a8sMyszcFh0RXlMkuyOOalWSpQM/wggxXGxvkXzwnOD0B6PgyMMK4JUHWTHdYUMUg7YJ+aDTAzVsrQn; whwswswws=; retina=1; cid=9; wqmnx1=MDEyNjM4MXRvLmRlP2wmb282NWwoUF9NKWU0S2lvb001UzAvNDZmVTJWTykoKQ%3D%3D; __jdb=122270672.3.1604551260329498973932|5.1605143633; mba_sid=16051436336501280281032371675.3; __wga=1605143685666.1605143685666.1605143685666.1605143685666.1.1; PPRD_P=UUID.1604551260329498973932; jxsid_s_t=1605143685750; jxsid_s_u=https%3A//home.m.jd.com/myJd/newhome.action; sc_width=768; shshshfp=aaee2557949e023f4460353c697591be; shshshsID=0688b1d17aa849aa8d24f71a99d67a67_2_1605143686246',//账号一ck,例:pt_key=XXX;pt_pin=XXX
  '',//账号二ck,例:pt_key=XXX;pt_pin=XXX;如有更多,依次类推
]
// 判断github action里面是否有京东ck
if (process.env.JD_COOKIE) {
  if (process.env.JD_COOKIE.indexOf('&') > -1) {
    console.log(`您的cookie选择的是用&隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('&');
  } else if (process.env.JD_COOKIE.indexOf('\n') > -1) {
    console.log(`您的cookie选择的是用换行隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('\n');
  } else {
    CookieJDs = process.env.JD_COOKIE.split();
  }
  console.log(`\n====================共有${CookieJDs.length}个京东账号Cookie=========\n`);
  console.log(`==================脚本执行- 北京时间(UTC+8)：${new Date(new Date().getTime() + new Date().getTimezoneOffset()*60*1000 + 8*60*60*1000).toLocaleString()}=====================\n`)
  // console.log(`\n==================脚本执行来自 github action=====================\n`)
}
for (let i = 0; i < CookieJDs.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['CookieJD' + index] = CookieJDs[i];
}

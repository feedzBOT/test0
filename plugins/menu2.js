let { JSDOM } = require('jsdom')
let fs = require ('fs')
const { createHash } = require('crypto') 
let util = require('util')
let path = require('path')
let fetch = require('node-fetch')
let levelling = require('../lib/levelling')
const moment = require('moment-timezone')
let PhoneNumber = require('awesome-phonenumber')
const os = require('os')
let { performance } = require('perf_hooks')
let { MessageType, mentionedJid } = require('@adiwajshing/baileys')
let handler  = async (m, { conn, usedPrefix: _p, args }) => {
let neww = performance.now()
let teks = `${args[0]}`.toLowerCase()
const chats = conn.chats.all()
const groups = chats.filter(v => v.jid.endsWith('g.us'))
const petik = '```'
const groupsIn = groups.filter(v => !v.read_only)
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
//let nani = 'https://telegra.ph/file/bb4e04d8ab841bd0fe71f.png' 
heum = [
  "https://i.imgur.com/cvqoK7l.jpg",
  "https://i.imgur.com/r1rm2ry.jpg",
  "https://i.imgur.com/8XO7t9a.jpg",
  "https://i.imgur.com/rTLpecf.jpg",
  "https://i.imgur.com/l9of06d.jpg",
  "https://i.imgur.com/GSegIuQ.jpg",
  "https://i.imgur.com/nSwNlyf.jpg",
  "https://i.imgur.com/iWhZIYl.jpg",
  "https://i.imgur.com/53x02Cj.jpg",
  "https://i.imgur.com/kqrgbGx.jpg",
  "https://i.imgur.com/p9rFiqZ.jpg",
  "https://i.imgur.com/Fr1Biar.jpg",
  "https://i.imgur.com/Y0pOrf4.jpg",
  "https://i.imgur.com/DLbggpI.jpg",
  "https://i.imgur.com/wQWKt8t.jpg",
  "https://i.imgur.com/bqm2ror.jpg",
  "https://i.imgur.com/YjdCC5T.jpg",
  "https://i.imgur.com/JIsiLyr.jpg",
  "https://i.imgur.com/smwHPTJ.jpg",
  "https://i.imgur.com/Rj7btya.jpg",
  "https://i.imgur.com/rvbxepM.jpg",
  "https://i.imgur.com/RNU9BjN.jpg",
  "https://i.imgur.com/sXWfHxx.jpg",
  "https://i.imgur.com/4hgUEny.jpg",
  "https://i.imgur.com/rQNFNIR.jpg",
  "https://i.imgur.com/NIkfoSt.jpg",
  "https://i.imgur.com/gXJCV7E.jpg",
  "https://i.imgur.com/i8pWglI.jpg",
  "https://i.imgur.com/pTgKmHa.jpg",
  "https://i.imgur.com/T5QtZ9I.jpg",
  "https://i.imgur.com/gIHmi7S.jpg",
  "https://i.imgur.com/U3MCtzx.jpg",
  "https://i.imgur.com/5hJCG2f.jpg",
  "https://i.imgur.com/OzBgd1W.jpg",
  "https://i.imgur.com/3TvSX1i.jpg",
  "https://i.imgur.com/b2MkoYM.jpg",
  "https://i.imgur.com/Dtru3fp.jpg",
  "https://i.imgur.com/vkqLf9v.jpg",
  "https://i.imgur.com/b1vBRTV.jpg",
  "https://i.imgur.com/eMv5vkT.jpg",
  "https://i.imgur.com/1kbChJv.jpg",
  "https://i.imgur.com/hQFq7aG.jpg",
  "https://i.imgur.com/bWbqyNE.jpg",
  "https://i.imgur.com/fXhu9Yc.jpg",
  "https://i.imgur.com/QutckMk.jpg",
  "https://i.imgur.com/VKrAV4e.jpg",
  "https://i.imgur.com/vzbezXa.jpg",
  "https://i.imgur.com/UTk4A6G.jpg",
  "https://i.imgur.com/SSS7cE4.jpg",
  "https://i.imgur.com/H2WQ3Rs.jpg",
  "https://i.imgur.com/VK8ibDW.jpg",
  "https://i.imgur.com/my9rWpH.jpg",
  "https://i.imgur.com/83UBvmx.jpg",
  "https://i.imgur.com/9J1txSW.jpg",
  "https://i.imgur.com/ZjYQem6.jpg",
  "https://i.imgur.com/tzqq3tg.jpg",
  "https://i.imgur.com/E8gxWdF.jpg",
  "https://i.imgur.com/kN1MpzR.jpg",
  "https://i.imgur.com/s8ql7VD.jpg",
  "https://i.imgur.com/BcjcGwf.jpg",
  "https://i.imgur.com/aFeqLQJ.jpg",
  "https://i.imgur.com/CaUoyOy.jpg",
  "https://i.imgur.com/w5dY397.png",
  "https://i.imgur.com/qouyaqF.png",
  "https://i.imgur.com/pi4zAhE.png",
  "https://i.imgur.com/Sz8gl1s.jpg",
  "https://i.imgur.com/mCcs2NN.jpg",
  "https://i.imgur.com/v3hTo6J.jpg",
  "https://i.imgur.com/57Th63e.jpg",
  "https://i.imgur.com/LpX93lR.jpg",
  "https://i.imgur.com/rNEUT4Z.jpg",
  "https://i.imgur.com/XnDOll0.jpg",
  "https://i.imgur.com/7neOAz7.jpg",
  "https://i.imgur.com/ARiLeyr.jpg",
  "https://i.imgur.com/UaolzDQ.jpg",
  "https://i.imgur.com/whQug6G.jpg",
  "https://i.imgur.com/GZ6WuYd.jpg",
  "https://i.imgur.com/eZrIUVn.jpg",
  "https://i.imgur.com/kMCASul.jpg",
  "https://i.imgur.com/xWyvOfG.jpg",
  "https://i.imgur.com/1PdrS8J.jpg",
  "https://i.imgur.com/FZhF1n7.jpg",
  "https://i.imgur.com/OK36OhR.jpg",
  "https://i.imgur.com/PvrMhRa.jpg",
  "https://i.imgur.com/WAGxTZr.jpg",
  "https://i.imgur.com/EXdzs7O.jpg",
  "https://i.imgur.com/uxHV6lt.jpg",
  "https://i.imgur.com/AyM8Dr9.jpg",
  "https://i.imgur.com/KYDbGQ8.jpg",
  "https://i.imgur.com/J1pVIzq.jpg",
  "https://i.imgur.com/VrvjWS9.jpg",
  "https://i.imgur.com/SCt9NUS.jpg",
  "https://i.imgur.com/hGUv0zE.jpg",
  "https://i.imgur.com/rdCIY2h.jpg",
  "https://i.imgur.com/pVEF4I6.jpg",
  "https://i.imgur.com/cm6q99h.jpg",
  "https://i.imgur.com/jVIThnw.jpg",
  "https://i.imgur.com/dng9fcA.jpg",
  "https://i.imgur.com/cjqGgBS.jpg",
  "https://i.imgur.com/XXaXqxD.jpg",
  "https://i.imgur.com/euxUpho.jpg",
  "https://i.imgur.com/9QySRv8.jpg",
  "https://i.imgur.com/JNa8XUg.jpg",
  "https://i.imgur.com/qYcpJr7.jpg",
  "https://i.imgur.com/2MObaOL.jpg",
  "https://i.imgur.com/Z8I8ppo.jpg",
  "https://i.imgur.com/gKCd4ko.jpg",
  "https://i.imgur.com/0CqXQjO.jpg",
  "https://i.imgur.com/Giuoo8H.jpg",
  "https://i.imgur.com/egKQ6Tw.jpg",
  "https://i.imgur.com/qdYU24C.jpg",
  "https://i.imgur.com/SUGJFWU.jpg",
  "https://i.imgur.com/nHS2Hqn.jpg",
  "https://i.imgur.com/iBkUCqD.jpg",
  "https://i.imgur.com/xW2EIYv.jpg",
  "https://i.imgur.com/KHMeOac.jpg",
  "https://i.imgur.com/PCx0r82.jpg",
  "https://i.imgur.com/CYDgDiT.jpg",
  "https://i.imgur.com/l6OnG4R.jpg",
  "https://i.imgur.com/E1JjyQb.jpg",
  "https://i.imgur.com/8YcibAv.jpg",
  "https://i.imgur.com/khT5P7q.jpg",
  "https://i.imgur.com/Ecpl5ig.jpg",
  "https://i.imgur.com/nFhXDSv.jpg",
  "https://i.imgur.com/jwliTrs.jpg",
  "https://i.imgur.com/IPcxQxr.jpg",
  "https://i.imgur.com/mC7Jwam.jpg",
  "https://i.imgur.com/fXCkoWO.jpg",
  "https://i.imgur.com/Q7PzkLS.jpg",
  "https://i.imgur.com/l6Yv7il.jpg",
  "https://i.imgur.com/sdDMwGz.jpg",
  "https://i.imgur.com/SjhcUYT.jpg",
  "https://i.imgur.com/jO2Ecs2.jpg",
  "https://i.imgur.com/rjYuiVx.jpg",
  "https://i.imgur.com/0jiYDHI.jpg",
  "https://i.imgur.com/CT1MDI3.jpg",
  "https://i.imgur.com/qxyIKQr.jpg",
  "https://i.imgur.com/uDQjHRP.jpg",
  "https://i.imgur.com/ol2Oj8R.jpg",
  "https://i.imgur.com/Wfjb2Ai.jpg",
  "https://i.imgur.com/74y3fAJ.jpg",
  "https://i.imgur.com/dDjh4Uw.jpg",
  "https://i.imgur.com/CjpjWxM.jpg",
  "https://i.imgur.com/NIC81ns.jpg",
  "https://i.imgur.com/0KkbJge.jpg",
  "https://i.imgur.com/xqBJ4tV.jpg",
  "https://i.imgur.com/1zHEb7K.jpg",
  "https://i.imgur.com/TOFZzI1.jpg",
  "https://i.imgur.com/1e11CSw.jpg",
  "https://i.imgur.com/IccBn2c.jpg",
  "https://i.imgur.com/XRZGGcJ.jpg",
  "https://i.imgur.com/PFtdlMw.jpg",
  "https://i.imgur.com/f3drZoc.jpg",
  "https://i.imgur.com/352upti.jpg",
  "https://i.imgur.com/c1uJml9.jpg",
  "https://i.imgur.com/Vi5s22D.jpg",
  "https://i.imgur.com/aQqsIEE.jpg",
  "https://i.imgur.com/irpCe7P.jpg",
  "https://i.imgur.com/Zx6Yjff.jpg",
  "https://i.imgur.com/LgKKZ4R.jpg",
  "https://i.imgur.com/FCGTCXZ.jpg",
  "https://i.imgur.com/f1u6YTD.png",
  "https://i.imgur.com/6O1vzmr.jpg",
  "https://i.imgur.com/L5H3zRz.png",
  "https://i.imgur.com/LFC8bNW.jpg",
  "https://i.imgur.com/zvEYbeN.jpg",
  "https://i.imgur.com/gACJQoI.jpg",
  "https://i.imgur.com/7iXAyWx.jpg",
  "https://i.imgur.com/xM3grxy.jpg",
  "https://i.imgur.com/IoWiIW3.jpg",
  "https://i.imgur.com/o9AjYD4.jpg",
  "https://i.imgur.com/8C4hJNm.png",
  "https://i.imgur.com/EzbwAlV.jpg",
  "https://i.imgur.com/579AXWF.jpg",
  "https://i.imgur.com/5JWh0g2.jpg",
  "https://i.imgur.com/2J0ZLVw.jpg",
  "https://i.imgur.com/gAX2K9U.jpg",
  "https://i.imgur.com/rf4BQTk.jpg",
  "https://i.imgur.com/JXeXDJY.jpg",
  "https://i.imgur.com/QbcSeQd.jpg",
  "https://i.imgur.com/xgy2bEF.jpg",
  "https://i.imgur.com/MpKbH1S.jpg",
  "https://i.imgur.com/b3B3TRg.jpg",
  "https://i.imgur.com/0SjdKRJ.jpg",
  "https://i.imgur.com/WxJ4Dty.jpg",
  "https://i.imgur.com/yhYvKdi.jpg",
  "https://i.imgur.com/07Cq8eX.jpg",
  "https://i.imgur.com/uT7p0IQ.jpg",
  "https://i.imgur.com/yjrxPh1.jpg",
  "https://i.imgur.com/CJTkcpu.jpg",
  "https://i.imgur.com/ngtHTXw.jpg",
  "https://i.imgur.com/iGoSGYS.jpg",
  "https://i.imgur.com/6wZtAFN.jpg",
  "https://i.imgur.com/fZ9nAIm.jpg",
  "https://i.imgur.com/S5f4IgT.jpg",
  "https://i.imgur.com/IBlQ7td.jpg",
  "https://i.imgur.com/BzZyyj6.jpg",
  "https://i.imgur.com/X8FBjTy.jpg",
  "https://i.imgur.com/MUBx7Fv.jpg",
  "https://i.imgur.com/hKquzgo.jpg",
  "https://i.imgur.com/GPSI7tl.jpg",
  "https://i.imgur.com/hXXe9uI.jpg",
  "https://i.imgur.com/varo8zI.jpg",
  "https://i.imgur.com/SJ2tSzt.jpg",
  "https://i.imgur.com/Zn61xQ3.jpg",
  "https://i.imgur.com/IH4Cc82.jpg",
  "https://i.imgur.com/7VuDuEX.jpg",
  "https://i.imgur.com/iO8e46Y.jpg",
  "https://i.imgur.com/d1yPdFW.jpg",
  "https://i.imgur.com/Ny2USkc.jpg",
  "https://i.imgur.com/X6OpdJn.jpg",
  "https://i.imgur.com/A8I2ZTy.jpg",
  "https://i.imgur.com/FHwGc6j.jpg",
  "https://i.imgur.com/3oxBfue.jpg",
  "https://i.imgur.com/s0cb0wy.jpg",
  "https://i.imgur.com/xJRBUyS.jpg",
  "https://i.imgur.com/pMrRebM.jpg",
  "https://i.imgur.com/eRagL8l.jpg",
  "https://i.imgur.com/jv7FQyz.jpg",
  "https://i.imgur.com/lk8eH5C.jpg",
  "https://i.imgur.com/pBVU4oI.jpg",
  "https://i.imgur.com/sgXgSyZ.jpg",
  "https://i.imgur.com/uriQw5p.jpg",
  "https://i.imgur.com/mHCGMvd.jpg",
  "https://i.imgur.com/Jswt4WI.jpg",
  "https://i.imgur.com/7FrFFmk.jpg",
  "https://i.imgur.com/mj54g94.jpg",
  "https://i.imgur.com/GbdRNHn.jpg",
  "https://i.imgur.com/IdBY0RC.jpg",
  "https://i.imgur.com/jt9g4qv.jpg",
  "https://i.imgur.com/cYLW6ND.jpg",
  "https://i.imgur.com/a6bG9OJ.jpg",
  "https://i.imgur.com/Vp4CrzA.jpg",
  "https://i.imgur.com/bJosWlx.jpg",
  "https://i.imgur.com/q04kkvk.jpg",
  "https://i.imgur.com/dDeGegy.jpg",
  "https://i.imgur.com/PsGH4iF.jpg",
  "https://i.imgur.com/XzNwtKs.png",
  "https://i.imgur.com/G76GnQs.jpg",
  "https://i.imgur.com/9Pop0jk.jpg",
  "https://i.imgur.com/EvPbdLv.jpg",
  "https://i.imgur.com/yMV4Euc.jpg",
  "https://i.imgur.com/EG519Cl.jpg",
  "https://i.imgur.com/H8bquFj.jpg",
  "https://i.imgur.com/8VlMtwn.jpg",
  "https://i.imgur.com/XcavaOU.jpg",
  "https://i.imgur.com/rIaXF4X.jpg",
  "https://i.imgur.com/POQtJbb.jpg",
  "https://i.imgur.com/AOJGdKS.jpg",
  "https://i.imgur.com/RBVnaaY.jpg",
  "https://i.imgur.com/8i848vt.jpg",
  "https://i.imgur.com/CMkZ0sG.jpg",
  "https://i.imgur.com/405HlDU.jpg",
  "https://i.imgur.com/yqfaXY6.jpg",
  "https://i.imgur.com/5rNqyY7.jpg",
  "https://i.imgur.com/RKkCq8P.jpg",
  "https://i.imgur.com/vhWaESf.jpg",
  "https://i.imgur.com/mvs9JHj.jpg",
  "https://i.imgur.com/Du7uY2o.jpg",
  "https://i.imgur.com/vsmmU9M.jpg",
  "https://i.imgur.com/h85RIBK.jpg",
  "https://i.imgur.com/yBXlOHY.jpg",
  "https://i.imgur.com/3NMCJZv.jpg",
  "https://i.imgur.com/1dz7k1S.jpg",
  "https://i.imgur.com/hZFrdFW.jpg",
  "https://i.imgur.com/8aeoeYN.jpg",
  "https://i.imgur.com/XFKDEIJ.jpg",
  "https://i.imgur.com/Gv3VTue.jpg",
  "https://i.imgur.com/NluTBYi.jpg",
  "https://i.imgur.com/9xIZshz.jpg",
  "https://i.imgur.com/sORiJ4l.jpg",
  "https://i.imgur.com/7HEjmnF.jpg",
  "https://i.imgur.com/kqwpjvM.jpg",
  "https://i.imgur.com/G4CWkdA.jpg",
  "https://i.imgur.com/zljM2wk.jpg",
  "https://i.imgur.com/MIoFqaW.jpg",
  "https://i.imgur.com/VTzw4ZG.jpg",
  "https://i.imgur.com/i9erTFD.jpg",
  "https://i.imgur.com/A1arIN6.jpg",
  "https://i.imgur.com/4csKEij.jpg",
  "https://i.imgur.com/4ytTvdj.jpg",
  "https://i.imgur.com/lMTwpnQ.jpg",
  "https://i.imgur.com/dvMzGCc.jpg",
  "https://i.imgur.com/UplQQ8U.jpg",
  "https://i.imgur.com/LSddlbB.jpg",
  "https://i.imgur.com/PUOkYZp.jpg",
  "https://i.imgur.com/KSgP3or.jpg",
  "https://i.imgur.com/pPZlMYE.jpg",
  "https://i.imgur.com/Q3pB3JT.jpg",
  "https://i.imgur.com/EMe85w7.jpg",
  "https://i.imgur.com/1dhFaiz.jpg",
  "https://i.imgur.com/tyG2tLv.jpg",
  "https://i.imgur.com/DqK8zjX.jpg",
  "https://i.imgur.com/iLBiiLo.jpg",
  "https://i.imgur.com/pegvicI.jpg",
  "https://i.imgur.com/ViJOBaQ.jpg",
  "https://i.imgur.com/N74QlWf.jpg",
  "https://i.imgur.com/17PCCM1.jpg",
  "https://i.imgur.com/PINdg09.jpg",
  "https://i.imgur.com/3j7ltKs.jpg",
  "https://i.imgur.com/bfoaURB.jpg",
  "https://i.imgur.com/FZbfA68.jpg",
  "https://i.imgur.com/YkTyXp0.jpg",
  "https://i.imgur.com/DqF8cRf.jpg",
  "https://i.imgur.com/lz7rlYb.jpg",
  "https://i.imgur.com/qafsgIF.jpg",
  "https://i.imgur.com/56XrZUq.jpg",
  "https://i.imgur.com/rCpKDgd.jpg",
  "https://i.imgur.com/HOsFONj.jpg",
  "https://i.imgur.com/edDPEvs.jpg",
  "https://i.imgur.com/wYuIGVH.png",
  "https://i.imgur.com/LSbd9Wj.jpg",
  "https://i.imgur.com/KwgVsYF.jpg",
  "https://i.imgur.com/Eujsxkf.jpg",
  "https://i.imgur.com/LVmj61N.jpg",
  "https://i.imgur.com/hfGo3OS.jpg",
  "https://i.imgur.com/BEMHZ2j.jpg",
  "https://i.imgur.com/1D8jSsK.jpg",
  "https://i.imgur.com/T7QW4Ih.jpg",
  "https://i.imgur.com/z1Mm4nQ.jpg",
  "https://i.imgur.com/ezxEDso.jpg",
  "https://i.imgur.com/8uMwsX8.jpg",
  "https://i.imgur.com/pkoItBN.jpg",
  "https://i.imgur.com/2sQWuQb.jpg",
  "https://i.imgur.com/A502SkB.jpg",
  "https://i.imgur.com/abXCscs.jpg",
  "https://i.imgur.com/1c1oc7r.jpg",
  "https://i.imgur.com/NDQskOe.jpg",
  "https://i.imgur.com/MlFrAcW.png",
  "https://i.imgur.com/CnNE9TU.jpg",
  "https://i.imgur.com/E4EJ8OO.jpg",
  "https://i.imgur.com/NPcKWaQ.jpg",
  "https://i.imgur.com/yyuaxE0.jpg",
  "https://i.imgur.com/zKa4tlb.jpg",
  "https://i.imgur.com/bNOvXDM.jpg",
  "https://i.imgur.com/GKMG3wx.jpg",
  "https://i.imgur.com/oV7RntX.jpg",
  "https://i.imgur.com/Q93S52s.jpg",
  "https://i.imgur.com/2k5BlPs.jpg",
  "https://i.imgur.com/nOaSeBy.jpg",
  "https://i.imgur.com/KKilV96.png",
  "https://i.imgur.com/rB65Ogl.jpg",
  "https://i.imgur.com/QBVOim0.jpg",
  "https://i.imgur.com/FPdNAfX.jpg",
  "https://i.imgur.com/PlWhg77.jpg",
  "https://i.imgur.com/wSoVoiq.jpg",
  "https://i.imgur.com/2lINUF6.png",
  "https://i.imgur.com/mFV54d5.jpg",
  "https://i.imgur.com/miVWDFs.jpg",
  "https://i.imgur.com/5AQo1EV.jpg",
  "https://i.imgur.com/cIbfUOw.jpg",
  "https://i.imgur.com/jUH2dFn.jpg"
]
let nani = heum[Math.floor(Math.random() * heum.length)]
  try {
const job = global.DATABASE.data.users[m.sender].level
  var zerojob = 'Pengangguran'
  
  	      if (job >= '0' && job <= '5') {
  		      zerojob = 'Pengangguran'
 } else if (job >= '5' && job <= '10') {
 			   zerojob = 'Pemulung'
 } else if (job >= '10' && job <= '20') {
 			   zerojob = 'Miner/Penambang'
 } else if (job >= '20' && job <= '30') {
 			   zerojob = 'Penebang Pohon'
 } else if (job >= '30' && job <= '40') {
 			   zerojob = 'Pangkalan Ojek'
 } else if (job >= '40' && job <= '50') {
 			   zerojob = 'Driver Online'
 } else if (job >= '50' && job <= '60') {
 			   zerojob = 'Satpam'
 } else if (job >= '60' && job <= '70') {
 			   zerojob = 'Polisi'
 } else if (job >= '70' && job <= '80') {
 			   zerojob = 'Tentara'
 } else if (job >= '80' && job <= '90') {
 			   zerojob = 'Pekerja Kantoran'
 } else if (job >= '90' && job <= '100') {
 			   zerojob = 'Prostitusi Online'
 } else {
 			   zerojob = 'Prostitusi Online'
 }
 
  	const lbars = global.DATABASE.data.users[m.sender].level
  var zerobars = '[▒▒▒▒▒▒▒▒▒]'

         if (lbars >= '0' && lbars <= '5') {
                zerobars = '[▒▒▒▒▒▒▒▒▒▒]'
         } else if (lbars >= '5' && lbars <= '10') {
				zerobars = '[█▒▒▒▒▒▒▒▒▒]'
		 } else if (lbars >= '10' && lbars <= '20') {
				zerobars = '[██▒▒▒▒▒▒▒▒]'
		} else if (lbars >= '20' && lbars <= '30') {
				zerobars = '[███▒▒▒▒▒▒▒]'
		} else if (lbars >= '30' && lbars <= '40') {
				zerobars = '[████▒▒▒▒▒▒]'
		} else if (lbars >= '40' && lbars <= '50') {
				zerobars = '[█████▒▒▒▒▒]'
		} else if (lbars >= '50' && lbars <= '60') {
				zerobars = '[██████▒▒▒▒]' 
		} else if (lbars >= '60' && lbars <= '70') {
				zerobars = '[███████▒▒▒]'
		} else if (lbars >= '70' && lbars <= '80') {
				zerobars = '[████████▒▒]'
		} else if (lbars >= '80' && lbars <= '90') {
				zerobars = '[█████████▒]'
		} else if (lbars >= '90' && lbars <= '100') {
				zerobars = '[██████████]'
		} else { 
				zerobars = '[██████████]'
		} 

const jam = moment.tz('Asia/Jakarta').format('HH')

 var ucapanWaktu = 'Selamat Pagi 🌄'



				if (jam >= '03' && jam <= '10') {

				ucapanWaktu = 'Selamat Pagi 🌄'

				} else if (jam >= '10' && jam <= '13') {

				ucapanWaktu = 'Selamat Siang ☀️'

				} else if (jam >= '13' && jam <= '18') {

				ucapanWaktu = 'Selamat Sore 🌅'

				} else if (jam >= '18' && jam <= '23') {

				ucapanWaktu = 'Selamat Malam 🌙'

				} else {

				ucapanWaktu = 'Selamat Malam 🌙'

				}
let package = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')))
    let { exp, limit, level, role, age, money, registered, healt, coin, tigame } = global.DATABASE.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let premium = global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
    let sn = createHash('md5').update(m.sender).digest('hex')
    let name = conn.getName(m.sender)
    let d = new Date
    let locale = 'id'
    let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
    let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let totalfeature = Object.values(global.plugins).filter(v => v.help && v.tags).length
        const dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
    const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
    const hariRaya = new Date('December 31, 2021 23:59:59')
    const sekarang = new Date().getTime()
    const Selisih = hariRaya - sekarang
    const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
    const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60))
    const ddetik = Math.floor( Selisih % (1000 * 60) / 1000)
    const ultah = new Date('January 3, 2022 23:59:59')
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let totalreg = Object.keys(global.DATABASE._data.users).length
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let totalgc = Object.keys(global.DATABASE._data.chats).length
    let rtotalreg = 0
    rtotalreg = Object.values(global.DATABASE._data.users).filter(user => user.registered == true).length
        let tags = {
  'main': 'Start Bot',
      'daftar': 'Daftar',
      'abs': 'Absensi Menu', 
      'xp': 'Exp & Limit',
      'rpg': 'Adventure Menu (NEW)', 
      'tutor': 'Tutorial ZEROBOT',
      'hadiah': 'Hadiah',
     ' apk': 'Apk Downloader', 
      'dewasa': '18+ Menu',
      'database': 'Database',
      'group': 'Group Menu',
      'anime': 'Anime Menu',
      'panik': 'Gtwlah',
      'cs': 'Custom Sticker',
      'sticker': 'Creator Menu',
      'game': 'Fun Menu',
      'image': 'Image Menu',
      'videomaker': 'Video Menu',
      'anony': 'Anonymous Chat',
      'input': 'Virus Tapi Bukan Virus', 
      'audio': 'Audio Menu', 
      'sound': 'Sound Menu',
      'quotes': 'Random Menu',
      'primbon': 'Primbon Menu',
      'belajar': 'Education Menu',
      'music': 'Music Menu',
      'simi': 'Simsimi Menu',
      'kerang': 'Kerang Menu',
      'downloader': 'Downloader Menu',
      'news': 'News Menu',
      'spam': 'Spammer Menu',
      'tools': 'Tools Menu',
      'jadibot': 'Bot Numpang',
      'premium': 'Premium & VIP Menu',
      'owner': 'Owner Menu',
      'host': 'Host Menu',
      'info': 'Information',
      'thnks': 'Thanks To', 
    }
    for (let plugin of Object.values(global.plugins))
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!tag in  tags) tags[tag] = tag
    let help = Object.values(global.plugins).map(plugin => {
      return {
        help: plugin.help,
        tags: plugin.tags,
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit
      }
    })
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let menu of help)
        if (menu.tags && menu.tags.includes(tag))
          if (menu.help) groups[tag].push(menu)
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || `
${petik}Hello %name${petik} 
${petik}Im ${conn.getName(conn.user.jid)} And You Use Prefix %p${petik} 

❏ Ｉｎｆｏ Ｂｏｔ
❏ Bot Name : ${petik} ${conn.getName(conn.user.jid)} ${petik} 
❏ Ulang Tahun Owner : ${petik} ${ohari} Hari ${ojam} Jam ${onet} Menit ${detek} Detik ${petik} 
❏ Browser : ${petik} ${conn.browserDescription[1]} ${petik} 
❏ Wa Web Name : ${petik} ${conn.browserDescription[0]} ${petik} 
❏ Wa Web Version : ${petik} ${conn.browserDescription[2]} ${petik} 
❏ WhatsApp Version : ${petik} ${conn.user.phone.wa_version} ${petik} 
❏ Phone : ${petik} ${conn.user.phone.device_manufacturer} ${petik} 
❏ Version Android : ${petik} Android ${conn.user.phone.os_version} ${petik} 
❏ Hostname Server : ${petik} ${os.hostname()} ${petik} 
❏ Battery : ${conn.battery ? conn.battery.value : '100'}℅
❏ Seri Phone : ${petik} ${conn.user.phone.device_model} ${petik} 
❏ Version : ${petik} %version ${petik} 
❏ Speed : ${petik} ${neww} ms ${petik} 
❏ Total Features : ${petik} 1000+ ${petik} 

❏ ${petik} Join Here ${petik} 
❏ ${petik} - ${petik} 

❏ Ｉｎｆｏ Ｕｓｅｒ
❏ UserName : ${petik} %name ${petik} 
❏ Serial Number : ${petik} ${sn} ${petik} 
❏ Prefix : ${petik} %p ${petik}  
❏ Mention : ${petik} @${m.sender.replace(/@.+/, '')} ${petik} 
❏ Age : ${petik} ${registered ? '' + age : ''} ${petik} 
❏ Phone Number : ${petik} ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')} ${petik} 
❏ Registered : ${petik} ${registered ? 'Yes': 'No'} ${petik} 
❏ Premium User : ${petik} ${premium ? 'Yes': 'No'} ${petik} 
❏ Pekerjaan : ${petik} ${zerojob} ${petik} 
❏ Role : ${petik} %role ${petik} 
❏ Level Bars : ${petik} ${zerobars} ${petik} 
❏ Health : ${petik} %healt ${petik} 
❏ Coin : ${petik} %coin ${petik} 
❏ Money : ${petik} RP %money ${petik} 
❏ Ticket : ${petik} %limit ${petik} 
❏ Game Limit : ${petik} %tigame ${petik} 
❏ Level : ${petik} %level ${petik} 
❏ Exp : ${petik} %exp ${petik} 
❏ Exp To Levelup : ${petik} %xp4levelup ${petik} 
❏ Total Exp : ${petik} %totalexp ${petik} 

❏ Ｄａｔｅ ＆ Ｔｉｍｅ
❏ Day : ${petik} %week ${petik} 
❏ Date : ${petik} %date ${petik} 
❏ Weton : ${petik} %weton ${petik} 
❏ Tahun Baru : ${petik} ${jhari} Hari ${jjam} Jam ${mmmenit} Menit ${ddetik} Detik Lagi ${petik}
❏ Islamic Date : ${petik} ${dateIslamic} ${petik} 
❏ Time : ${petik} %time WIB ${petik} 
❏ Time : ${petik} ${wit} WIT ${petik} 
❏ Time : ${petik} ${wita} WITA ${petik} 

❏ Ｄａｔａ
❏ Uptime : ${petik} %uptime ${petik} 
❏ Main Uptime : ${petik} %muptime ${petik} 
❏ Users In Database : ${petik} %totalreg Users ${petik} 
❏ Registered : ${petik} %rtotalreg ${petik} 
❏ Total GC : ${petik} %totalgc ${petik} 

CLICK HERE
`
    let header = conn.menu.header || '༺ %category ༻'
    let body   = conn.menu.body   || '│ 𖣵 %cmd%islimit'
    let footer = conn.menu.footer || '╰────\n'
    let after  = conn.menu.after  || (conn.user.jid == global.conn.user.jid ? '' : `Powered By @${global.conn.user.jid.split`@`[0]}`) + `\n*%npmname@^%version*\n\`\`\`\%npmdesc\`\`\``
    let _text  = before + '\n'
    for (let tag in groups) {
      _text += header.replace(/%category/g, tags[tag]) + '\n'
      for (let menu of groups[tag]) {
        for (let help of menu.help)
          _text += body.replace(/%cmd/g, menu.prefix ? help : '%p' + help).replace(/%islimit/g, menu.limit ? ' (Limit)' : '')  + '\n'
      }
      _text += footer + '\n'
    }
    _text += after
    text =  typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, name, weton, week, date, time, totalreg, totalgc, rtotalreg, role, healt, money, coin, tigame, sn, 
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).join`|`})`, 'g'), (_, name) => ''+replace[name])
   await conn.send2ButtonLoc(m.chat, await (await fetch(nani + teks)).buffer(), text.trim(), '', '⋮☰ INFO BOT', '.alive', '⋮☰ OWNER', '.owner', m)
  } catch (e) {
    conn.reply(m.chat, 'Maaf, Menu Kami Sedang Error, Silahkan Coba Lagi Nanti', m)
    throw e
  }
}
handler.command = /^(ngab)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
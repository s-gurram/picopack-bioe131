(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[9831],{29831:function(e,t,r){var i;e.exports=(i=r(17753),r(29038),r(1224),r(59982),r(47089),function(){var e=i,t=e.lib.BlockCipher,r=e.algo,n=[],s=[],o=[],c=[],a=[],h=[],f=[],u=[],d=[],l=[];!function(){for(var e=[],t=0;t<256;t++)e[t]=t<128?t<<1:t<<1^283;var r=0,i=0;for(t=0;t<256;t++){var p=i^i<<1^i<<2^i<<3^i<<4;p=p>>>8^255&p^99,n[r]=p,s[p]=r;var _=e[r],v=e[_],y=e[v],g=257*e[p]^16843008*p;o[r]=g<<24|g>>>8,c[r]=g<<16|g>>>16,a[r]=g<<8|g>>>24,h[r]=g,g=16843009*y^65537*v^257*_^16843008*r,f[p]=g<<24|g>>>8,u[p]=g<<16|g>>>16,d[p]=g<<8|g>>>24,l[p]=g,r?(r=_^e[e[e[y^_]]],i^=e[e[i]]):r=i=1}}();var p=[0,1,2,4,8,16,32,64,128,27,54],_=r.AES=t.extend({_doReset:function(){if(!this._nRounds||this._keyPriorReset!==this._key){for(var e=this._keyPriorReset=this._key,t=e.words,r=e.sigBytes/4,i=4*((this._nRounds=r+6)+1),s=this._keySchedule=[],o=0;o<i;o++)o<r?s[o]=t[o]:(h=s[o-1],o%r?r>6&&o%r==4&&(h=n[h>>>24]<<24|n[h>>>16&255]<<16|n[h>>>8&255]<<8|n[255&h]):(h=n[(h=h<<8|h>>>24)>>>24]<<24|n[h>>>16&255]<<16|n[h>>>8&255]<<8|n[255&h],h^=p[o/r|0]<<24),s[o]=s[o-r]^h);for(var c=this._invKeySchedule=[],a=0;a<i;a++){if(o=i-a,a%4)var h=s[o];else h=s[o-4];c[a]=a<4||o<=4?h:f[n[h>>>24]]^u[n[h>>>16&255]]^d[n[h>>>8&255]]^l[n[255&h]]}}},encryptBlock:function(e,t){this._doCryptBlock(e,t,this._keySchedule,o,c,a,h,n)},decryptBlock:function(e,t){var r=e[t+1];e[t+1]=e[t+3],e[t+3]=r,this._doCryptBlock(e,t,this._invKeySchedule,f,u,d,l,s),r=e[t+1],e[t+1]=e[t+3],e[t+3]=r},_doCryptBlock:function(e,t,r,i,n,s,o,c){for(var a=this._nRounds,h=e[t]^r[0],f=e[t+1]^r[1],u=e[t+2]^r[2],d=e[t+3]^r[3],l=4,p=1;p<a;p++){var _=i[h>>>24]^n[f>>>16&255]^s[u>>>8&255]^o[255&d]^r[l++],v=i[f>>>24]^n[u>>>16&255]^s[d>>>8&255]^o[255&h]^r[l++],y=i[u>>>24]^n[d>>>16&255]^s[h>>>8&255]^o[255&f]^r[l++],g=i[d>>>24]^n[h>>>16&255]^s[f>>>8&255]^o[255&u]^r[l++];h=_,f=v,u=y,d=g}_=(c[h>>>24]<<24|c[f>>>16&255]<<16|c[u>>>8&255]<<8|c[255&d])^r[l++],v=(c[f>>>24]<<24|c[u>>>16&255]<<16|c[d>>>8&255]<<8|c[255&h])^r[l++],y=(c[u>>>24]<<24|c[d>>>16&255]<<16|c[h>>>8&255]<<8|c[255&f])^r[l++],g=(c[d>>>24]<<24|c[h>>>16&255]<<16|c[f>>>8&255]<<8|c[255&u])^r[l++],e[t]=_,e[t+1]=v,e[t+2]=y,e[t+3]=g},keySize:8});e.AES=t._createHelper(_)}(),i.AES)},47089:function(e,t,r){var i,n,s,o,c,a,h,f,u,d,l,p,_,v,y,g,k,B,x;e.exports=(i=r(17753),r(59982),void(i.lib.Cipher||(n=i,s=n.lib,o=s.Base,c=s.WordArray,a=s.BufferedBlockAlgorithm,h=n.enc,h.Utf8,f=h.Base64,u=n.algo.EvpKDF,d=s.Cipher=a.extend({cfg:o.extend(),createEncryptor:function(e,t){return this.create(this._ENC_XFORM_MODE,e,t)},createDecryptor:function(e,t){return this.create(this._DEC_XFORM_MODE,e,t)},init:function(e,t,r){this.cfg=this.cfg.extend(r),this._xformMode=e,this._key=t,this.reset()},reset:function(){a.reset.call(this),this._doReset()},process:function(e){return this._append(e),this._process()},finalize:function(e){return e&&this._append(e),this._doFinalize()},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(){function e(e){return"string"==typeof e?x:k}return function(t){return{encrypt:function(r,i,n){return e(i).encrypt(t,r,i,n)},decrypt:function(r,i,n){return e(i).decrypt(t,r,i,n)}}}}()}),s.StreamCipher=d.extend({_doFinalize:function(){return this._process(!0)},blockSize:1}),l=n.mode={},p=s.BlockCipherMode=o.extend({createEncryptor:function(e,t){return this.Encryptor.create(e,t)},createDecryptor:function(e,t){return this.Decryptor.create(e,t)},init:function(e,t){this._cipher=e,this._iv=t}}),_=l.CBC=function(){var e=p.extend();function t(e,t,r){var i,n=this._iv;n?(i=n,this._iv=void 0):i=this._prevBlock;for(var s=0;s<r;s++)e[t+s]^=i[s]}return e.Encryptor=e.extend({processBlock:function(e,r){var i=this._cipher,n=i.blockSize;t.call(this,e,r,n),i.encryptBlock(e,r),this._prevBlock=e.slice(r,r+n)}}),e.Decryptor=e.extend({processBlock:function(e,r){var i=this._cipher,n=i.blockSize,s=e.slice(r,r+n);i.decryptBlock(e,r),t.call(this,e,r,n),this._prevBlock=s}}),e}(),v=(n.pad={}).Pkcs7={pad:function(e,t){for(var r=4*t,i=r-e.sigBytes%r,n=i<<24|i<<16|i<<8|i,s=[],o=0;o<i;o+=4)s.push(n);var a=c.create(s,i);e.concat(a)},unpad:function(e){var t=255&e.words[e.sigBytes-1>>>2];e.sigBytes-=t}},s.BlockCipher=d.extend({cfg:d.cfg.extend({mode:_,padding:v}),reset:function(){var e;d.reset.call(this);var t=this.cfg,r=t.iv,i=t.mode;this._xformMode==this._ENC_XFORM_MODE?e=i.createEncryptor:(e=i.createDecryptor,this._minBufferSize=1),this._mode&&this._mode.__creator==e?this._mode.init(this,r&&r.words):(this._mode=e.call(i,this,r&&r.words),this._mode.__creator=e)},_doProcessBlock:function(e,t){this._mode.processBlock(e,t)},_doFinalize:function(){var e,t=this.cfg.padding;return this._xformMode==this._ENC_XFORM_MODE?(t.pad(this._data,this.blockSize),e=this._process(!0)):(e=this._process(!0),t.unpad(e)),e},blockSize:4}),y=s.CipherParams=o.extend({init:function(e){this.mixIn(e)},toString:function(e){return(e||this.formatter).stringify(this)}}),g=(n.format={}).OpenSSL={stringify:function(e){var t=e.ciphertext,r=e.salt;return(r?c.create([1398893684,1701076831]).concat(r).concat(t):t).toString(f)},parse:function(e){var t,r=f.parse(e),i=r.words;return 1398893684==i[0]&&1701076831==i[1]&&(t=c.create(i.slice(2,4)),i.splice(0,4),r.sigBytes-=16),y.create({ciphertext:r,salt:t})}},k=s.SerializableCipher=o.extend({cfg:o.extend({format:g}),encrypt:function(e,t,r,i){i=this.cfg.extend(i);var n=e.createEncryptor(r,i),s=n.finalize(t),o=n.cfg;return y.create({ciphertext:s,key:r,iv:o.iv,algorithm:e,mode:o.mode,padding:o.padding,blockSize:e.blockSize,formatter:i.format})},decrypt:function(e,t,r,i){return i=this.cfg.extend(i),t=this._parse(t,i.format),e.createDecryptor(r,i).finalize(t.ciphertext)},_parse:function(e,t){return"string"==typeof e?t.parse(e,this):e}}),B=(n.kdf={}).OpenSSL={execute:function(e,t,r,i,n){if(i||(i=c.random(8)),n)s=u.create({keySize:t+r,hasher:n}).compute(e,i);else var s=u.create({keySize:t+r}).compute(e,i);var o=c.create(s.words.slice(t),4*r);return s.sigBytes=4*t,y.create({key:s,iv:o,salt:i})}},x=s.PasswordBasedCipher=k.extend({cfg:k.cfg.extend({kdf:B}),encrypt:function(e,t,r,i){var n=(i=this.cfg.extend(i)).kdf.execute(r,e.keySize,e.ivSize,i.salt,i.hasher);i.iv=n.iv;var s=k.encrypt.call(this,e,t,n.key,i);return s.mixIn(n),s},decrypt:function(e,t,r,i){i=this.cfg.extend(i),t=this._parse(t,i.format);var n=i.kdf.execute(r,e.keySize,e.ivSize,t.salt,i.hasher);return i.iv=n.iv,k.decrypt.call(this,e,t,n.key,i)}}))))},29038:function(e,t,r){var i,n,s;e.exports=(i=r(17753),s=(n=i).lib.WordArray,n.enc.Base64={stringify:function(e){var t=e.words,r=e.sigBytes,i=this._map;e.clamp();for(var n=[],s=0;s<r;s+=3)for(var o=(t[s>>>2]>>>24-s%4*8&255)<<16|(t[s+1>>>2]>>>24-(s+1)%4*8&255)<<8|t[s+2>>>2]>>>24-(s+2)%4*8&255,c=0;c<4&&s+.75*c<r;c++)n.push(i.charAt(o>>>6*(3-c)&63));var a=i.charAt(64);if(a)for(;n.length%4;)n.push(a);return n.join("")},parse:function(e){var t=e.length,r=this._map,i=this._reverseMap;if(!i){i=this._reverseMap=[];for(var n=0;n<r.length;n++)i[r.charCodeAt(n)]=n}var o=r.charAt(64);if(o){var c=e.indexOf(o);-1!==c&&(t=c)}return function(e,t,r){for(var i=[],n=0,o=0;o<t;o++)if(o%4){var c=r[e.charCodeAt(o-1)]<<o%4*2|r[e.charCodeAt(o)]>>>6-o%4*2;i[n>>>2]|=c<<24-n%4*8,n++}return s.create(i,n)}(e,t,i)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="},i.enc.Base64)},59982:function(e,t,r){var i,n,s,o,c,a,h,f;e.exports=(f=r(17753),r(62555),r(19557),s=(n=(i=f).lib).Base,o=n.WordArray,a=(c=i.algo).MD5,h=c.EvpKDF=s.extend({cfg:s.extend({keySize:4,hasher:a,iterations:1}),init:function(e){this.cfg=this.cfg.extend(e)},compute:function(e,t){for(var r,i=this.cfg,n=i.hasher.create(),s=o.create(),c=s.words,a=i.keySize,h=i.iterations;c.length<a;){r&&n.update(r),r=n.update(e).finalize(t),n.reset();for(var f=1;f<h;f++)r=n.finalize(r),n.reset();s.concat(r)}return s.sigBytes=4*a,s}}),i.EvpKDF=function(e,t,r){return h.create(r).compute(e,t)},f.EvpKDF)},19557:function(e,t,r){var i,n,s;e.exports=(n=(i=r(17753)).lib.Base,s=i.enc.Utf8,void(i.algo.HMAC=n.extend({init:function(e,t){e=this._hasher=new e.init,"string"==typeof t&&(t=s.parse(t));var r=e.blockSize,i=4*r;t.sigBytes>i&&(t=e.finalize(t)),t.clamp();for(var n=this._oKey=t.clone(),o=this._iKey=t.clone(),c=n.words,a=o.words,h=0;h<r;h++)c[h]^=1549556828,a[h]^=909522486;n.sigBytes=o.sigBytes=i,this.reset()},reset:function(){var e=this._hasher;e.reset(),e.update(this._iKey)},update:function(e){return this._hasher.update(e),this},finalize:function(e){var t=this._hasher,r=t.finalize(e);return t.reset(),t.finalize(this._oKey.clone().concat(r))}})))},1224:function(e,t,r){var i;e.exports=(i=r(17753),function(e){var t=i,r=t.lib,n=r.WordArray,s=r.Hasher,o=t.algo,c=[];!function(){for(var t=0;t<64;t++)c[t]=4294967296*e.abs(e.sin(t+1))|0}();var a=o.MD5=s.extend({_doReset:function(){this._hash=new n.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(e,t){for(var r=0;r<16;r++){var i=t+r,n=e[i];e[i]=16711935&(n<<8|n>>>24)|4278255360&(n<<24|n>>>8)}var s=this._hash.words,o=e[t+0],a=e[t+1],l=e[t+2],p=e[t+3],_=e[t+4],v=e[t+5],y=e[t+6],g=e[t+7],k=e[t+8],B=e[t+9],x=e[t+10],m=e[t+11],S=e[t+12],z=e[t+13],b=e[t+14],C=e[t+15],M=s[0],w=s[1],D=s[2],E=s[3];M=h(M,w,D,E,o,7,c[0]),E=h(E,M,w,D,a,12,c[1]),D=h(D,E,M,w,l,17,c[2]),w=h(w,D,E,M,p,22,c[3]),M=h(M,w,D,E,_,7,c[4]),E=h(E,M,w,D,v,12,c[5]),D=h(D,E,M,w,y,17,c[6]),w=h(w,D,E,M,g,22,c[7]),M=h(M,w,D,E,k,7,c[8]),E=h(E,M,w,D,B,12,c[9]),D=h(D,E,M,w,x,17,c[10]),w=h(w,D,E,M,m,22,c[11]),M=h(M,w,D,E,S,7,c[12]),E=h(E,M,w,D,z,12,c[13]),D=h(D,E,M,w,b,17,c[14]),M=f(M,w=h(w,D,E,M,C,22,c[15]),D,E,a,5,c[16]),E=f(E,M,w,D,y,9,c[17]),D=f(D,E,M,w,m,14,c[18]),w=f(w,D,E,M,o,20,c[19]),M=f(M,w,D,E,v,5,c[20]),E=f(E,M,w,D,x,9,c[21]),D=f(D,E,M,w,C,14,c[22]),w=f(w,D,E,M,_,20,c[23]),M=f(M,w,D,E,B,5,c[24]),E=f(E,M,w,D,b,9,c[25]),D=f(D,E,M,w,p,14,c[26]),w=f(w,D,E,M,k,20,c[27]),M=f(M,w,D,E,z,5,c[28]),E=f(E,M,w,D,l,9,c[29]),D=f(D,E,M,w,g,14,c[30]),M=u(M,w=f(w,D,E,M,S,20,c[31]),D,E,v,4,c[32]),E=u(E,M,w,D,k,11,c[33]),D=u(D,E,M,w,m,16,c[34]),w=u(w,D,E,M,b,23,c[35]),M=u(M,w,D,E,a,4,c[36]),E=u(E,M,w,D,_,11,c[37]),D=u(D,E,M,w,g,16,c[38]),w=u(w,D,E,M,x,23,c[39]),M=u(M,w,D,E,z,4,c[40]),E=u(E,M,w,D,o,11,c[41]),D=u(D,E,M,w,p,16,c[42]),w=u(w,D,E,M,y,23,c[43]),M=u(M,w,D,E,B,4,c[44]),E=u(E,M,w,D,S,11,c[45]),D=u(D,E,M,w,C,16,c[46]),M=d(M,w=u(w,D,E,M,l,23,c[47]),D,E,o,6,c[48]),E=d(E,M,w,D,g,10,c[49]),D=d(D,E,M,w,b,15,c[50]),w=d(w,D,E,M,v,21,c[51]),M=d(M,w,D,E,S,6,c[52]),E=d(E,M,w,D,p,10,c[53]),D=d(D,E,M,w,x,15,c[54]),w=d(w,D,E,M,a,21,c[55]),M=d(M,w,D,E,k,6,c[56]),E=d(E,M,w,D,C,10,c[57]),D=d(D,E,M,w,y,15,c[58]),w=d(w,D,E,M,z,21,c[59]),M=d(M,w,D,E,_,6,c[60]),E=d(E,M,w,D,m,10,c[61]),D=d(D,E,M,w,l,15,c[62]),w=d(w,D,E,M,B,21,c[63]),s[0]=s[0]+M|0,s[1]=s[1]+w|0,s[2]=s[2]+D|0,s[3]=s[3]+E|0},_doFinalize:function(){var t=this._data,r=t.words,i=8*this._nDataBytes,n=8*t.sigBytes;r[n>>>5]|=128<<24-n%32;var s=e.floor(i/4294967296),o=i;r[15+(n+64>>>9<<4)]=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8),r[14+(n+64>>>9<<4)]=16711935&(o<<8|o>>>24)|4278255360&(o<<24|o>>>8),t.sigBytes=4*(r.length+1),this._process();for(var c=this._hash,a=c.words,h=0;h<4;h++){var f=a[h];a[h]=16711935&(f<<8|f>>>24)|4278255360&(f<<24|f>>>8)}return c},clone:function(){var e=s.clone.call(this);return e._hash=this._hash.clone(),e}});function h(e,t,r,i,n,s,o){var c=e+(t&r|~t&i)+n+o;return(c<<s|c>>>32-s)+t}function f(e,t,r,i,n,s,o){var c=e+(t&i|r&~i)+n+o;return(c<<s|c>>>32-s)+t}function u(e,t,r,i,n,s,o){var c=e+(t^r^i)+n+o;return(c<<s|c>>>32-s)+t}function d(e,t,r,i,n,s,o){var c=e+(r^(t|~i))+n+o;return(c<<s|c>>>32-s)+t}t.MD5=s._createHelper(a),t.HmacMD5=s._createHmacHelper(a)}(Math),i.MD5)},62555:function(e,t,r){var i,n,s,o,c,a,h,f;e.exports=(n=(i=f=r(17753)).lib,s=n.WordArray,o=n.Hasher,c=i.algo,a=[],h=c.SHA1=o.extend({_doReset:function(){this._hash=new s.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(e,t){for(var r=this._hash.words,i=r[0],n=r[1],s=r[2],o=r[3],c=r[4],h=0;h<80;h++){if(h<16)a[h]=0|e[t+h];else{var f=a[h-3]^a[h-8]^a[h-14]^a[h-16];a[h]=f<<1|f>>>31}var u=(i<<5|i>>>27)+c+a[h];u+=h<20?1518500249+(n&s|~n&o):h<40?1859775393+(n^s^o):h<60?(n&s|n&o|s&o)-1894007588:(n^s^o)-899497514,c=o,o=s,s=n<<30|n>>>2,n=i,i=u}r[0]=r[0]+i|0,r[1]=r[1]+n|0,r[2]=r[2]+s|0,r[3]=r[3]+o|0,r[4]=r[4]+c|0},_doFinalize:function(){var e=this._data,t=e.words,r=8*this._nDataBytes,i=8*e.sigBytes;return t[i>>>5]|=128<<24-i%32,t[14+(i+64>>>9<<4)]=Math.floor(r/4294967296),t[15+(i+64>>>9<<4)]=r,e.sigBytes=4*t.length,this._process(),this._hash},clone:function(){var e=o.clone.call(this);return e._hash=this._hash.clone(),e}}),i.SHA1=o._createHelper(h),i.HmacSHA1=o._createHmacHelper(h),f.SHA1)}}]);
//# sourceMappingURL=9831.de8b3aa9.chunk.js.map
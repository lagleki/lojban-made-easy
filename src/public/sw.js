if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let b={};const l=e=>a(e,c),n={module:{uri:c},exports:b,require:l};s[c]=Promise.all(i.map((e=>n[e]||l(e)))).then((e=>(r(...e),b)))}}define(["./workbox-07a7b4f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/202-cde36805f975d98f.js",revision:"cde36805f975d98f"},{url:"/_next/static/chunks/2cca2479-a57b524fb98a69f2.js",revision:"a57b524fb98a69f2"},{url:"/_next/static/chunks/393-37ab17c9255fcd36.js",revision:"37ab17c9255fcd36"},{url:"/_next/static/chunks/72-51f22dd4f5fdea96.js",revision:"51f22dd4f5fdea96"},{url:"/_next/static/chunks/982-5016e62b3da20ee1.js",revision:"5016e62b3da20ee1"},{url:"/_next/static/chunks/c16184b3-10fc8a534b82d95c.js",revision:"10fc8a534b82d95c"},{url:"/_next/static/chunks/framework-5429a50ba5373c56.js",revision:"5429a50ba5373c56"},{url:"/_next/static/chunks/main-8d4d21f407bd2409.js",revision:"8d4d21f407bd2409"},{url:"/_next/static/chunks/pages/%5Blang%5D/%5B...slug%5D-ae63397b859f24d2.js",revision:"ae63397b859f24d2"},{url:"/_next/static/chunks/pages/%5Blang%5D/list-a376e4bdefce17b0.js",revision:"a376e4bdefce17b0"},{url:"/_next/static/chunks/pages/%5Blang%5D/texts-e8b1c965ed75e3e7.js",revision:"e8b1c965ed75e3e7"},{url:"/_next/static/chunks/pages/%5Blang%5D/welcome-7cdb879769739786.js",revision:"7cdb879769739786"},{url:"/_next/static/chunks/pages/_app-d187aa7da10b83e0.js",revision:"d187aa7da10b83e0"},{url:"/_next/static/chunks/pages/_error-5a00309fd5f4b49e.js",revision:"5a00309fd5f4b49e"},{url:"/_next/static/chunks/pages/articles/%5B...slug%5D-6e9d536954ef3943.js",revision:"6e9d536954ef3943"},{url:"/_next/static/chunks/pages/books/%5B...slug%5D-e948ae0526850838.js",revision:"e948ae0526850838"},{url:"/_next/static/chunks/pages/books/learn-lojban-a98acee119a4d2d5.js",revision:"a98acee119a4d2d5"},{url:"/_next/static/chunks/pages/humour/%5B...slug%5D-2f0a6f45f3405afb.js",revision:"2f0a6f45f3405afb"},{url:"/_next/static/chunks/pages/index-2c13eb2150e9d940.js",revision:"2c13eb2150e9d940"},{url:"/_next/static/chunks/pages/list-eea46fbccee8b5aa.js",revision:"eea46fbccee8b5aa"},{url:"/_next/static/chunks/pages/questions/%5B...slug%5D-9aab7dee63a985a0.js",revision:"9aab7dee63a985a0"},{url:"/_next/static/chunks/pages/texts/%5B...slug%5D-e8f827620fff7f1c.js",revision:"e8f827620fff7f1c"},{url:"/_next/static/chunks/pages/welcome-9302dcc517f246c6.js",revision:"9302dcc517f246c6"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-6ef43a8d4a395f49.js",revision:"6ef43a8d4a395f49"},{url:"/_next/static/css/c3c08a698f5ef6c7.css",revision:"c3c08a698f5ef6c7"},{url:"/_next/static/vyMoKFsjpmqxWA2iq0Lfr/_buildManifest.js",revision:"f8f921b17871dcb8c3708a9b6012bf30"},{url:"/_next/static/vyMoKFsjpmqxWA2iq0Lfr/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/assets/favicons/browserconfig.xml",revision:"b3bb2fca64bf481078d2e01b4cdf70fd"},{url:"/assets/favicons/site.webmanifest",revision:"7cd392ff91d9d91efbf7a269b46b74de"},{url:"/assets/fonts/LinLibertine_R.otf",revision:"b06a933df90f327628f6287410ccd4df"},{url:"/assets/fonts/LinLibertine_RB.otf",revision:"a5edee4ec797ffb7fe8b2b3208b0f5aa"},{url:"/assets/fonts/LinLibertine_RBI.otf",revision:"cfa5f713d497ed77d0197fc84777e91d"},{url:"/assets/fonts/LinLibertine_RI.otf",revision:"7a38fb95f0f08b5821d08df73a659b1b"},{url:"/assets/icons/favicon.ico",revision:"2b8f4a308f730a2d9829b9d273aa0c3c"},{url:"/assets/icons/jbotcan.svg",revision:"73661ea70b0b02da85eb507cfdb5fcb9"},{url:"/assets/icons/lojbo-150.png",revision:"fa46d7f46ef271488addc52770bc0b5d"},{url:"/assets/icons/lojbo-16.png",revision:"d8de680a7217cb185a6242bdc887fc52"},{url:"/assets/icons/lojbo-180.png",revision:"3bc0b14af711f53c9dd8fc318b2ac2d2"},{url:"/assets/icons/lojbo-192.png",revision:"f3e4e745af1ef89082f4102d96d98704"},{url:"/assets/icons/lojbo-32.png",revision:"c59ff92a43e7e28c50028d2b2e4890b6"},{url:"/assets/icons/lojbo-512.png",revision:"365c90930c6791f3c74b5cdcfe9070f6"},{url:"/assets/icons/lojbo.ico",revision:"1ce8e95a02560b531ce73d2fd7f09af7"},{url:"/assets/icons/lojbo.svg",revision:"74843c4f639ce8f98d98569f5929c4fb"},{url:"/assets/js/redirector.js",revision:"ccd9431fbb0da30bca83e715f5f0436d"},{url:"/assets/pixra/arxivo/sutysisku_simsa.png",revision:"b77095b78ad0221c20b59cc114493926"},{url:"/assets/pixra/arxivo/sutysisku_xraste.png",revision:"f29e5a5ed31c980b90d85bc00ce02d65"},{url:"/assets/pixra/books/prostaya-logika/1.svg",revision:"5f20ba428cd9c86f714c8433535e71c6"},{url:"/assets/pixra/books/prostaya-logika/11.webp",revision:"5cb0f9f0666b0a6ec31b19125a8856ee"},{url:"/assets/pixra/books/prostaya-logika/12.webp",revision:"0e5dd08703819c1abb7f22cd319d0542"},{url:"/assets/pixra/books/prostaya-logika/13.webp",revision:"ee0c625cef20a8e86f63086c16376437"},{url:"/assets/pixra/books/prostaya-logika/14.webp",revision:"83742644078042511844a82c780beb27"},{url:"/assets/pixra/books/prostaya-logika/16.webp",revision:"5e60acec344d9774937ae533791446ee"},{url:"/assets/pixra/books/prostaya-logika/19.webp",revision:"8b9dd852c8ce4ea1a163ddb647a70292"},{url:"/assets/pixra/books/prostaya-logika/2.svg",revision:"4716da2b75f818365030b58c9dacea01"},{url:"/assets/pixra/books/prostaya-logika/22.webp",revision:"1a515976a612e5b7001f41b744935bdf"},{url:"/assets/pixra/books/prostaya-logika/23.webp",revision:"f9f7708213f8dc8e7d05f89e5fe3395b"},{url:"/assets/pixra/books/prostaya-logika/25.webp",revision:"a972bf131cc511bf0dd9b6947473f87a"},{url:"/assets/pixra/books/prostaya-logika/3.svg",revision:"4a359757d339b81a08009dfef6704666"},{url:"/assets/pixra/books/prostaya-logika/4.svg",revision:"aa21a2ca31aefe413ff65fea293ac4fd"},{url:"/assets/pixra/books/prostaya-logika/5.svg",revision:"f29f6933c9f757601f18625f38d70386"},{url:"/assets/pixra/books/prostaya-logika/6.svg",revision:"485e94bea8d2ea59b42e29285910e5d9"},{url:"/assets/pixra/books/prostaya-logika/7.svg",revision:"676e7cc1ff0f7f8945524fb74cab93a1"},{url:"/assets/pixra/books/prostaya-logika/8.svg",revision:"31017c5b427e7de138d693d394fd0b61"},{url:"/assets/pixra/books/prostaya-logika/9.webp",revision:"6b404df7a22d620c5eac7ea3ff645a07"},{url:"/assets/pixra/cilre/badna.webp",revision:"8c33364c88861a70a8ae6c4de569519a"},{url:"/assets/pixra/cilre/badri.webp",revision:"89203c629e770340210ba2c83b61e76e"},{url:"/assets/pixra/cilre/baho_carvi.webp",revision:"7943f1d8d9777ca0f0a0e96dc8c519d6"},{url:"/assets/pixra/cilre/bajra.webp",revision:"c52e9078a8395c1a32e432fd32a580f5"},{url:"/assets/pixra/cilre/bekpi.png",revision:"ba85a777abb7656de734c7ee9b112325"},{url:"/assets/pixra/cilre/bekpi.webp",revision:"c900c5e2ebee6d187b70c1a87fed3907"},{url:"/assets/pixra/cilre/bilma.webp",revision:"c96b7e0844ba285f87bd9c1e6da3a5de"},{url:"/assets/pixra/cilre/carvi.webp",revision:"86215ce5fe2a74561f70b52588ba8bc4"},{url:"/assets/pixra/cilre/casnu.webp",revision:"72008ad6b1bcb253d7c0879363f84b2a"},{url:"/assets/pixra/cilre/cerni.webp",revision:"4fc2e7a979d17e1a64acc4d9c3c4afc0"},{url:"/assets/pixra/cilre/ci_prenu.webp",revision:"8bd3027b1754b84e2e10ed4b32b8cd83"},{url:"/assets/pixra/cilre/cinba3.webp",revision:"1802138c1e47ae8313569279cfb92081"},{url:"/assets/pixra/cilre/ciska.webp",revision:"2ad5777092dc32c47cf572793e91caf4"},{url:"/assets/pixra/cilre/cisma.webp",revision:"c4ecce6bc387fd0c3a7231bbc20c7a42"},{url:"/assets/pixra/cilre/citka.webp",revision:"80d24fc947e2a777feb54b19479b81e3"},{url:"/assets/pixra/cilre/citka0.webp",revision:"7a4bd97d3ce97ab90441b8f39cdbd9b3"},{url:"/assets/pixra/cilre/ckafi.webp",revision:"05cd3a470cb4631a08becbbee238ad38"},{url:"/assets/pixra/cilre/clira.webp",revision:"53da84f3d68b800406fa21aebc17d81c"},{url:"/assets/pixra/cilre/cmalu_karce.webp",revision:"699ad8feeb2f045522b17121a0158c0e"},{url:"/assets/pixra/cilre/cmana.webp",revision:"b9a755d42c7876913893a6e1d7be0c9c"},{url:"/assets/pixra/cilre/cmila.webp",revision:"d2a9a0b7a741b116e660291a4ce02024"},{url:"/assets/pixra/cilre/coha_cikna.webp",revision:"5f7c12d857ff7eb5614f9ad4ce56dff7"},{url:"/assets/pixra/cilre/coha_purdi.webp",revision:"4a7acb79ae158d3e41d733a773d0bade"},{url:"/assets/pixra/cilre/coha_viska.webp",revision:"24898d49cd9145c7de86190370a56417"},{url:"/assets/pixra/cilre/coho.webp",revision:"7a32d7fcf9574b69ffbbbe2b39ab651b"},{url:"/assets/pixra/cilre/cohu_purdi.webp",revision:"56e25ae513e812d6e9c1895c3416a6e1"},{url:"/assets/pixra/cilre/cohu_purdi2.webp",revision:"710c3e5cb14bc7b43dd20d2fe890f2db"},{url:"/assets/pixra/cilre/coi.webp",revision:"56e0327f6126485677807e92b31b77e1"},{url:"/assets/pixra/cilre/cortu.webp",revision:"195a684f2c5cb7f1dd152a8b12cdbf7d"},{url:"/assets/pixra/cilre/ctuca.webp",revision:"a70c49f8c1970dc1aa7be5e0a2a83c1c"},{url:"/assets/pixra/cilre/ctuca0.webp",revision:"be4e78ee9b2db7c8b9850fb1d1530df5"},{url:"/assets/pixra/cilre/dansu.webp",revision:"92801d156a496bfbf957f713d37310f6"},{url:"/assets/pixra/cilre/deha_vasxu.webp",revision:"52188426d7522eae8ac499624f1ef7a6"},{url:"/assets/pixra/cilre/diha_vasxu.webp",revision:"f3cba9cb1e36bd4108235f0fe7a34e33"},{url:"/assets/pixra/cilre/dirgo.webp",revision:"d8f1ef846c32e6216d70e30564b11338"},{url:"/assets/pixra/cilre/djica_tuha_le_titla.webp",revision:"2d3620ab3c299dc80beb365b98c19dbf"},{url:"/assets/pixra/cilre/do.webp",revision:"c7b85e675475090b894c8b87a2addcef"},{url:"/assets/pixra/cilre/do0.webp",revision:"794a4ef36007bc42e9f5ad6e2fca66b4"},{url:"/assets/pixra/cilre/do_e_mi_nintadni.webp",revision:"edd41940401d5e35962893ae28be60e5"},{url:"/assets/pixra/cilre/donri.webp",revision:"6d0119678650f0b0cc2e162b5b58c4fe"},{url:"/assets/pixra/cilre/dzena.webp",revision:"9adab65bff05fa90add6c48494383cac"},{url:"/assets/pixra/cilre/fengu.webp",revision:"33b944c46a4ef65e76ac63daa21929ac"},{url:"/assets/pixra/cilre/galxykafke.webp",revision:"f585641c2ab69c92f363df78339d260e"},{url:"/assets/pixra/cilre/gleki.webp",revision:"d4bc54f26d628ab4ddba98348db9812c"},{url:"/assets/pixra/cilre/jduli.webp",revision:"c72c5b97b2c46a2dad1e74d14b2e7b9d"},{url:"/assets/pixra/cilre/jinru.webp",revision:"d1c18a7561b5e048e0ac1ed5f67ab868"},{url:"/assets/pixra/cilre/jundi.webp",revision:"fd33772f4e50afe2602e2c36597c503b"},{url:"/assets/pixra/cilre/kahe_vofli.webp",revision:"71f795a9a518936d5646d54ea643f746"},{url:"/assets/pixra/cilre/kahe_vofli0.webp",revision:"ebb13f4fda80eee40becc0f86609e6de"},{url:"/assets/pixra/cilre/karce.webp",revision:"c3ddee2581236d2d8ff56d4fa22d15ff"},{url:"/assets/pixra/cilre/klama_fi.webp",revision:"511b22cdd843b9607f5776ab5fa105d8"},{url:"/assets/pixra/cilre/klama_ti.webp",revision:"b63b35a5f2a87b699748f2be130a74f6"},{url:"/assets/pixra/cilre/laldo.webp",revision:"37a549ac53c1262122a5b4a39bf35d6f"},{url:"/assets/pixra/cilre/le_gerku_faha_plipe.webp",revision:"69d5f6bdadb0aa362843c25424d0a413"},{url:"/assets/pixra/cilre/le_plise_cu_kukte.webp",revision:"3685dfbdaab5461b8e0e56eeb070ddd3"},{url:"/assets/pixra/cilre/le_prenu_cu_senva_tuha_le_nei.webp",revision:"20b4d7056f1ffca958b2f1931e7c153e"},{url:"/assets/pixra/cilre/le_prenu_cu_tirna_lei_djacu.webp",revision:"727b0bea66edb770af6192437540aeca"},{url:"/assets/pixra/cilre/le_prenu_e_le_gerku.webp",revision:"30737c96158634a523e0dc7f294ee215"},{url:"/assets/pixra/cilre/le_tricu_cu_barda.webp",revision:"102f68668d786d5cc7f4e5ac782c58a2"},{url:"/assets/pixra/cilre/le_tricu_cu_barda0.webp",revision:"a08de5c12bb5598cb57b343c14fd0e31"},{url:"/assets/pixra/cilre/le_vehi_ja_vehu_cmana.webp",revision:"574fc696dc8fc050be864902183919f0"},{url:"/assets/pixra/cilre/lumci.webp",revision:"bc63b0c8ba81d48f4576a31d747270a9"},{url:"/assets/pixra/cilre/melbi_je_cmalu_zdani.webp",revision:"6e75feb63259b0c709ca3cbfb955d74e"},{url:"/assets/pixra/cilre/melbi_zdani.webp",revision:"f83fec770dd630b71c075f7a7c6aff33"},{url:"/assets/pixra/cilre/mi.webp",revision:"1d06c6672309fd98d605da1a40538f00"},{url:"/assets/pixra/cilre/mi_prami_do.webp",revision:"11da1875040cf2cbfa9979310652906c"},{url:"/assets/pixra/cilre/mi_prami_do2.webp",revision:"92cb6634d5b4ed85c32998b7402b422f"},{url:"/assets/pixra/cilre/mohu_klama.webp",revision:"05311ac22468f681dc6873b44a0bfe95"},{url:"/assets/pixra/cilre/mohu_klama_le_tcana.webp",revision:"9433ddf0d458ae3b2abeb5afc1ba553f"},{url:"/assets/pixra/cilre/na_jimpe.webp",revision:"fb62c1c6866ca94a34399f0f74c0f785"},{url:"/assets/pixra/cilre/najnimre.webp",revision:"f5dfce76546e0daf06950e606f047ca3"},{url:"/assets/pixra/cilre/nanmu.webp",revision:"e5a1f7c584839ea5a68b377f37e82a51"},{url:"/assets/pixra/cilre/nicte.webp",revision:"041d65af31cfa7c20f4b2e066a70c65c"},{url:"/assets/pixra/cilre/nicte_fi_mi.webp",revision:"a63f18c8fbf2e2e17669d591a7314d72"},{url:"/assets/pixra/cilre/niha_le_tricu.webp",revision:"caebe6ad54f81f2f0ec700e905c2354a"},{url:"/assets/pixra/cilre/ninmu.webp",revision:"cb7e44ea0a024258fb98532727a8b0cf"},{url:"/assets/pixra/cilre/nintadni.webp",revision:"9dc5739e35ed804f961a1b05d3e6649e"},{url:"/assets/pixra/cilre/nurma.webp",revision:"7645de977c47e3bd9dd9da77c9b3573d"},{url:"/assets/pixra/cilre/panka_ninmu.webp",revision:"7c4bdeadc1d996394158d361653b39ce"},{url:"/assets/pixra/cilre/pendo.webp",revision:"e316a3dee6aac65ec6f7965564165fad"},{url:"/assets/pixra/cilre/pilno_le_fonxa.webp",revision:"6fd7d3b104a6553e8520ea86802b91a1"},{url:"/assets/pixra/cilre/pinxe_fi_le_kabri.webp",revision:"c1c8a5b0d018003b22c5f4c8e211c49d"},{url:"/assets/pixra/cilre/pinxe_le_djacu.webp",revision:"1665fdfcf64635d0641f1d8e31605dc7"},{url:"/assets/pixra/cilre/pinxe_le_jisra.webp",revision:"a0f4b342a1ccecba93a4a2da1dbbee73"},{url:"/assets/pixra/cilre/plicru.webp",revision:"f2fec9963b2af005199ae192c81b56bd"},{url:"/assets/pixra/cilre/puho_nenri.webp",revision:"66a11df67771a28b210b0fe537ead1fd"},{url:"/assets/pixra/cilre/rinsa.webp",revision:"ef8d98e4cb6e310315c03464fc46b1bb"},{url:"/assets/pixra/cilre/rinsa2.webp",revision:"a78d8e9bfb89b52be98fc790945cc49e"},{url:"/assets/pixra/cilre/se_vrusi_lo_ka_kukte.webp",revision:"528fd110b38c46db0ed60b421041722d"},{url:"/assets/pixra/cilre/senci.webp",revision:"d1fe8ba63ded3b3a4225f9ebc8cdad57"},{url:"/assets/pixra/cilre/sidju.webp",revision:"ae3d61c4d1e60cbf572e659864078eb7"},{url:"/assets/pixra/cilre/simxu prami.webp",revision:"b4f6c33fa5a83b06e66e568cff07ceb5"},{url:"/assets/pixra/cilre/simxu_tunba.webp",revision:"045c79ff1ce09c57c85ba42fdae306c8"},{url:"/assets/pixra/cilre/sipna.webp",revision:"55451e9f39ca978aa401e1461c7c7f1b"},{url:"/assets/pixra/cilre/sipna_zeha.webp",revision:"b05f8c7ecc65dc0f47fc9002ea284a22"},{url:"/assets/pixra/cilre/sruri.webp",revision:"7bc821acc5a6b9b06bac8842faf4eaa1"},{url:"/assets/pixra/cilre/sruri_since.webp",revision:"bad2f69c712378db984884f4148ca397"},{url:"/assets/pixra/cilre/stati.webp",revision:"d35b1ed370406f4ad1ff84413c9af9c4"},{url:"/assets/pixra/cilre/sumne.webp",revision:"d61bf5f7b7a916de0b14bfbabdd6d87a"},{url:"/assets/pixra/cilre/ta.webp",revision:"0283c812473c32abeeadd5a3c7c53d11"},{url:"/assets/pixra/cilre/tadni.webp",revision:"a3ac9148375c07bce4041d5997a285e6"},{url:"/assets/pixra/cilre/taske.webp",revision:"3be400d842653af959ca36e394cff3dc"},{url:"/assets/pixra/cilre/tavla.webp",revision:"a3af3abbd5798166d51f8d4ce2036d71"},{url:"/assets/pixra/cilre/tavla0.webp",revision:"d1411d2b1117b557ab2a7ab7ac4949f4"},{url:"/assets/pixra/cilre/tavla1.webp",revision:"715129ef52fb5bb73d48fd227fc38435"},{url:"/assets/pixra/cilre/tavla3.webp",revision:"5f8735801209794d3a628f4d166e5637"},{url:"/assets/pixra/cilre/tavla_le_pendo.webp",revision:"6d84b2143d642dc0fae4c1ec2c6e74a7"},{url:"/assets/pixra/cilre/tcati.webp",revision:"f5f478f56b74124c310cda3feb60bc1a"},{url:"/assets/pixra/cilre/tcidu_la_lojban.webp",revision:"6f2509f69d4978a7e5e38ecfdf2b295e"},{url:"/assets/pixra/cilre/ti.webp",revision:"87676c3f5e02ea5af569ac68e3325fcb"},{url:"/assets/pixra/cilre/tinjuhi.webp",revision:"380e50dd491cee78424117463e9190b4"},{url:"/assets/pixra/cilre/troci_cadzu.webp",revision:"03ef6b1be5aca03abf92752f73b72126"},{url:"/assets/pixra/cilre/tsani.webp",revision:"86b3bf44f4daeb4ec1ee22d0db779c24"},{url:"/assets/pixra/cilre/tu.webp",revision:"41a545340a594eea34af402a835e02a7"},{url:"/assets/pixra/cilre/tunba.webp",revision:"d53964628bbfbdcbdf0c3afca4daec3b"},{url:"/assets/pixra/cilre/ui_jinga.webp",revision:"7d4fa563ecf251357f144141ae3e91d6"},{url:"/assets/pixra/cilre/vanci.webp",revision:"dc1cf75254b3dcd55ff23b14b28cd962"},{url:"/assets/pixra/cilre/viha_pixra.webp",revision:"b424267f560714384c1401c254459b05"},{url:"/assets/pixra/cilre/vihu_pixra.webp",revision:"f7a5701af5cc120c3536fb36ea940689"},{url:"/assets/pixra/cilre/viku_cizra.webp",revision:"fe9330068e7f0d6c532bfff97e7bf618"},{url:"/assets/pixra/cilre/voi.webp",revision:"3c8a38d743831f62a556e0f8143eb744"},{url:"/assets/pixra/cilre/xadni1.png",revision:"2982a0271276e087f9d3b8450ce32fc5"},{url:"/assets/pixra/cilre/xadni1.svg",revision:"df48e1ade8e84ce65ac4cd6ebc53f1d1"},{url:"/assets/pixra/cilre/xadni1.webp",revision:"acb9d86237540643e7507f737806c46a"},{url:"/assets/pixra/cilre/xadni2.svg",revision:"6610cea393ef674df2f2cee24386e90d"},{url:"/assets/pixra/cilre/xagji.webp",revision:"05b90cf0eeaf0e5e616643d352e2580a"},{url:"/assets/pixra/cilre/xrula.webp",revision:"930ac27ab88748149aee7ec3924d533e"},{url:"/assets/pixra/cilre/zarci.webp",revision:"768d218ef5e25bae97e69988c5c062fe"},{url:"/assets/pixra/cilre/zgana_le_sefta.webp",revision:"72b8639c45d084a97114641bc87bbb55"},{url:"/assets/pixra/cilre/zgana_le_skina.webp",revision:"724c57dbc1d5761ca03a586b7e2b1f13"},{url:"/assets/pixra/ralju/cll.png",revision:"ef1ed8da8f4685cbcb5da4c6565ea8a2"},{url:"/assets/pixra/ralju/cll2.webp",revision:"29f101b8e0ea33386b0f2b4923b32736"},{url:"/assets/pixra/ralju/jduli.svg",revision:"9efc3139de10e017f071b94f34b7b6c8"},{url:"/assets/pixra/ralju/pluka_lanci.svg",revision:"a8b5e20b5860b23b15c7c2160ec94088"},{url:"/assets/pixra/ralju/ralju_lanci.svg",revision:"71de0376278c91d7edfd58f098435077"},{url:"/assets/pixra/ralju/texts.svg",revision:"9a407bd3465f7beb825d6e923ce6cf1f"},{url:"/assets/pixra/ralju/texts.webp",revision:"d85785aa7fc4fae1405ba673b8f04055"},{url:"/assets/pixra/ralju/velsku.webp",revision:"d3c4999f66be8e2bbef815d7be83bdc4"},{url:"/assets/pixra/ralju/xuncku.webp",revision:"7bbd742c4a3fb924410fe291c2be8f60"},{url:"/assets/pixra/ralju/xuncku2.webp",revision:"49249127f4a5ea8a744b2758f235d689"},{url:"/assets/pixra/texts/how-the-enemy-came-to-thlunrana/2.png",revision:"2cb1f3f1a7c502a67ab44a21cc2e6584"},{url:"/assets/pixra/texts/the-book/16.svg",revision:"5b8d61cb24b842b5ab3ee6fb7fc184a6"},{url:"/assets/pixra/texts/the-book/27.svg",revision:"c2c8c6ac6db0ff20b89694dbcc1f7019"},{url:"/assets/pixra/texts/the-book/31.svg",revision:"c303fdf56c4c891a1576b6bdffb39c9b"},{url:"/assets/pixra/texts/the-book/38.svg",revision:"cc58c628bd8ebfb1a832ef0eb62865d8"},{url:"/assets/pixra/texts/the-book/42.svg",revision:"f8e6fb40eae6015e67a6d056cd9fc5af"},{url:"/assets/pixra/texts/to-kill-a-child/25.svg",revision:"72abcc811a1d3a4b98768fe324e90211"},{url:"/assets/pixra/texts/to-kill-a-child/28.svg",revision:"0fc1ffe5c412ae9905489cf74271a5cd"},{url:"/assets/pixra/texts/to-kill-a-child/47.svg",revision:"4e61836225048e5a6ef4bccecf1a3d81"},{url:"/assets/pixra/texts/to-kill-a-child/8.svg",revision:"e2585106480c3d440c5d200d295d156b"},{url:"/assets/pixra/velsku/discord.svg",revision:"d7c8883b73b425e3601ceee2ea3a9b27"},{url:"/assets/pixra/velsku/slack.png",revision:"b1f8fe35670f3227c424227ddf39c60f"},{url:"/assets/pixra/velsku/telegram.svg",revision:"95702ab5df3c052be830894600608666"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));

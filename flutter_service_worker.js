'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "1f15032a2aa294c77923a5e3779e954d",
".git/config": "94d740da923102182d42a7054c7883a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "45828bc249c51a4ba6041162ceb2928f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "edf5a5de427a5d88da2bcb50339584af",
".git/logs/refs/heads/main": "0ca63c0a2a1b4ca2b6b260eecedae048",
".git/logs/refs/remotes/origin/main": "19272dbf6c574dd1f9624fc7b03e563f",
".git/objects/03/99a1227ed56f5219720e69a7452052157f09f2": "91b824d9c19c324878921581c6d5e82e",
".git/objects/03/9dae75bf5017a0b34dcecbc414d9d2e99f4c35": "5f2e5e7349b9ad8459fd117601e3df12",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0d/990cdbac555291f60650cd3ffb4c7dfd603f70": "c63b8d51673e3a9f5a7a5c7f04b6fcbc",
".git/objects/0d/d8c7d7e35f453730418d0db47ab988fceba93d": "07f123cc42231f0422cf017a3356a877",
".git/objects/18/a6936bff3d4e6a331b6e64211503ac203eb04f": "648119f4f7b161171575b473afc10962",
".git/objects/1e/7bbbdf77c449def99b70f40484f6ccd266e757": "37422341bdb7bf9e70864315a9ee8829",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/27/b7944c2b02c8d94bc7ca57629cac2ecde347cc": "bda6dd41e77907a3093337b477d91f20",
".git/objects/28/00bb6bc2ca38ab0d365ac9625916071eed441b": "bc67b4f62aef6f31b727f0cc8ca30a7a",
".git/objects/30/0d577b2b205673ae66dcd0b1a9ae49ff2ae38b": "05d6a29041fd363a1d199c9accc4dcc7",
".git/objects/31/cb0add1dd6fb81dad390929067ece38317614b": "2cc259353d3e4faa01cf1556e43475b0",
".git/objects/32/2ffc0808ec8d4c0b3645cc2a53daf5e02f1bbe": "2ef9b76832064fdc7783c6d6e9393bb9",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/34/bf20308b2334d3c1bedb8ea1f6e08679026c0b": "99fd70155af7650b82918504a9489986",
".git/objects/36/86c358bd0b05bf1c75fec596233a2572942f58": "fb41afd29b19b31a882aa662a33bdb55",
".git/objects/37/67737dbd52d43726f7096ec72ed03f1d1f77b1": "30cf371e885eb38131bb879d94fa5ce8",
".git/objects/39/aa7ba0ba0f005f550c34a56673ceee97398009": "9d2e366fab3cbbb409d6eba92f1464fc",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3b/92a8f421e36c81634355caaf6de6592556071e": "ee780e8720a9f475096855093446ba60",
".git/objects/3d/3df631fe490944727e1d06d178c9b84d806101": "beff39358e203891aa30aad45d0b6c08",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/40/8c5d15a4ac6592bbe6048dc7484fca36d328f0": "0f495f325f262d8d9fdf98e0ee6c5f3b",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/44/dc8c21638eff5d0e68fc933eaa5c453afdabbf": "384437f96d12b70e6ee5b1e83dcf6b7d",
".git/objects/46/70fab5b918ae88312f481e24a2f6d1743336ef": "4ad5e7fbbe8720b8aa2c9a978cc64a10",
".git/objects/49/85ba817549ed56cc5fdb83883431f3240344bf": "a1124caaac22ab9cf1e5b79f0ab0e71b",
".git/objects/4b/fe94c13b57f0b9fa5cc5b529fb913626c5e4b0": "248dcb0aba8603b5a99ea90609f4ba3b",
".git/objects/4d/ed5ecafb55bf27b9254245cca9b3700d1e1e14": "d63c9ccdc769dcd5bda479746edebab8",
".git/objects/50/398fb8f7de5e1ad2998d8509cb1b5fcf6bce1d": "74bd423fe4b4057fad08f6e82125e2ce",
".git/objects/52/c742dde466dc8a188865a6ec965db64f1f0bfc": "9816a0acf08cb5b5a6691d3e656b3136",
".git/objects/53/a74653ec94621b06a3f59579ce8eb87f9d3a9e": "c29758f8d31a9733fd297a0b3c3e1222",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/57/a08bac34a8acdfe15f422ed03e8b2bd68b007d": "6c0bd716563294aff89a0deb68910c7d",
".git/objects/59/03df43b9fa1cc8abc9304ef07c2aa2ee1cb6e0": "bcc353d8ee0226d8591511462eecf6b4",
".git/objects/5d/2ecd0d71d07ea43fc7138d711e0228df1427a4": "0fa4a99f46ac4a79f1097879fe8dd270",
".git/objects/5e/bf02b52ab6ca2ec708a1ac0896a4665a97ea80": "6be9c6d934ce24b9440b8eb533a984f3",
".git/objects/61/46a25553c5fe9099af9344814733ca025a6cf0": "94510e04ff7d5b40fa7d517f02e5e130",
".git/objects/64/ec4822aa03ffedaebdb5899fd347513b2fc9be": "a78505267f7d8ee2f573cccbb9f6490a",
".git/objects/6a/4eb2bbe337a1fbb31ee2e31fa608e334d3972d": "66e2a8ff6488be2b0bb72d29d75ebb74",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6d/eff0876cb505a05f6202d1a91ed881240abcef": "3b61a867752c70a1b9365601bfb3907f",
".git/objects/75/395c8e7aa66bbcf841b7031af771176ff6075c": "9798770817b95fc08629801c1b9dc4ba",
".git/objects/78/9cdabfb5fe2cefa754e2be2550ed882f39011f": "7bdc5a636186b61449e89b881445b0f6",
".git/objects/7a/4774c65191aeb28d0ed85a22cdffdfe963814b": "01a5fc4c95545fc68a9fb18d03dd172b",
".git/objects/7b/d064cdcd7982b8e43acfb7f0b84075d24c74d7": "79d55c1c49e5aae0d6c0379aa210cf61",
".git/objects/7f/35927d4578e9a68a574e3bea98c2f9d92602c9": "cf43de0491a18195e8934caad8dd9467",
".git/objects/81/7c6d0e6d174e2e4b80ae707c4ff2ece9169456": "70f20f0565ef1851dea94495c5204fb2",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/84/cb928e1951f4fc23c2919d8ad8b5223b419565": "fa92284aafa019770baa9b5f84805fb7",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/87/3b0c13878b04feaa59af1d2f802cf472c331a0": "0adc04e4b00c9a9d96edff9da99f9091",
".git/objects/88/231e858d0eb6ac92b2ced90b30c7002f9e6a71": "d3fe08a5784919a3747f5de44356408d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/2d7bd40879b15efc0e7e1bf9a93c2de9206eae": "1c44738641593e314e802df28b5830dd",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/90/f7da23818d28774498a792dcdc7156bac9910f": "d8e2b153ce176f217daa64118bff1908",
".git/objects/92/a5026feadfa6d29c8f937b3b166dcb45c171fb": "e310836af3dbe3d8f8dc43b4599d031d",
".git/objects/97/a8860ae9d8eb873c8edaf9fe89fbc10ac51d69": "140a0c411de1a0ffde7ccf50d364f123",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/a8/46ac05db46c798887b765df00959f8b977c77b": "493420446d3d583a313707e55dac3263",
".git/objects/ab/b787b613122f0ce1aee2cd0473e97f1a29af51": "6ce7edfc98cbd605f3f4c2ec614002eb",
".git/objects/ad/9cb512e515799605723226a9a89cb9b426003a": "ea2bc3eb5fde56bdfe21cf2192d54377",
".git/objects/ad/c7ee3e382b3d649e1b9eee416169d199979e1a": "3c6f127ff7a4dad86100b3ada7c73b2e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b2/7a69db3ee37d33c8b3033b4218f0aa0d2b55d5": "a7e21cf0de059f0a59eedd65e6f324ed",
".git/objects/b3/e1d20e12716c2fced7d54e074b225cc1ff6778": "68318fc0c77b6c0dc15701a35c04c461",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/ac5ddedd6864eb93c4cb5acef37af5be620ddd": "07832f457050c871cd207b1a5de9565c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/c6e3767357f4bf5016a21dc0b6015d08be3c99": "ed3aa2529b39652d96e835b68d09298c",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/e870ae30c0d2096c5ee76253ae22102a426c42": "d25b12794fce4ee8be96b8e1330e652f",
".git/objects/bf/0aeec6be2a3c6f2b12fb9b7da6b1526be2c91e": "d48994d1d65e18c23fa3b8c6a9e0f2ba",
".git/objects/c7/a30466a18337aa98a5cdd9d6c8dfd2aaa1d6b2": "5907bd092d322eab60718897a197748e",
".git/objects/c8/4c3c218a40a007a07193fc42e8f0ac1439f9c8": "5974bba9fa4016c3ebd55fc31c80453d",
".git/objects/ca/e8f9e9e913bdc94d134a43ae91ccdaa1457b0c": "1c38b0bdb5ba803fa39c5f133ebd00eb",
".git/objects/cd/b7b724048be1a939fedf06b15a146bf514178d": "3d1bee1c704a457f9cb510d693add525",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d2/8d28b31e7edad83f4117b25203ef8e88dc1a49": "783336185074ccba271959018343d6b1",
".git/objects/d3/5927f1eaca0c8e6251c43af5bc7d7f24c354d7": "f24d4871ffaff1524ffb9277722f8d4d",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/e0/381e8e47a40de389c2e5ca86e07ddcfafc19c0": "53cc4c91cb8d774833a9ad2d49947fa8",
".git/objects/e3/d208f7d218e0c92ce6e9939628293c0b6b074c": "b145fdb973683657e8da111b10c737b0",
".git/objects/e9/6db1558dc034c78069efacf564c7dc94283966": "a96cdfd5ad23e385b34715b9b9a8f44a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/5b8ff70008b9dfd4c97a3e6a017d9d1b25d6a6": "7175043a972cc7e93ea4a7492ab2a013",
".git/objects/f4/1b19d03b3ad29c6aeb7453be681b212d6d462e": "949996f86cc39dbd4cd30c1937e1091d",
".git/refs/heads/main": "5713381c07517bad2b153e336d743cce",
".git/refs/remotes/origin/main": "5713381c07517bad2b153e336d743cce",
"assets/AssetManifest.bin": "6ef6c83430f2aeb562f96644d41b7431",
"assets/AssetManifest.bin.json": "f57a0e10103cbc66596b837de93067fe",
"assets/AssetManifest.json": "1c60594cb5a883cd65907e96438e69df",
"assets/FontManifest.json": "24fd97b9cde1b79dd97cf2ac1be4e81d",
"assets/fonts/BlackAndWhitePicture-Regular.ttf": "2e464310604692b5213ca94cb1476b5b",
"assets/fonts/MaterialIcons-Regular.otf": "6313c704538a5825b5687fd758531ad5",
"assets/fonts/Oswald-Bold.ttf": "c95751378db3c5c8bfd993b164e13422",
"assets/fonts/Oswald-Regular.ttf": "b299a657c45aa257f1458b327f491bfb",
"assets/fonts/RubikMoonrocks-Regular.ttf": "95304efd3a56b35ff3dd90b016e23665",
"assets/images/profile.jpg": "0b3e82aacc7c05ebfc7d157b9279ae7f",
"assets/images/projects/1.png": "fe4f866a9a50c1394b35fe3d479e7c08",
"assets/images/projects/2.png": "568cb720638a47f5b4a7eab07c2d99bc",
"assets/images/projects/3.png": "18e45a5877c44e1653a39149bf4db99d",
"assets/images/skill/andorid.png": "6887b446897af63c7e4620c124bc9478",
"assets/images/skill/css.png": "adbab6dd9277797b5d7d6b1b9ea49f19",
"assets/images/skill/dart.png": "918e7c35823c7ad268ba831c6e7eaa64",
"assets/images/skill/firebase.png": "04aec5a53cd16f26a855e61aa5cd35b5",
"assets/images/skill/flutter.png": "8efb797d33c586ef3cb71d4083dd1fdb",
"assets/images/skill/html.png": "27b0afc8d7069fad77a6ece74eeb7e83",
"assets/images/skill/ios.png": "f0b9176ae7fd92f8fb97f513053d14c2",
"assets/images/skill/web.png": "78097feeda67b7a3ef038da707ff03be",
"assets/NOTICES": "a039c1d645c54971fc74106bea1d673e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "0219c5ac9710b221888d78cd3365c8fc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "acd7e28fce13cbff13f10298e9efa511",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "d99193f7b9789b60771f43bcdca8867b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5376d0a24a4112ddc32328eb031a6bbe",
"/": "5376d0a24a4112ddc32328eb031a6bbe",
"main.dart.js": "0cb801a85f63d12b22d518dbb98a95d3",
"manifest.json": "0cc4f05192cafb4ec3005dfc11449212",
"version.json": "743127353cca9176d11bb6ec7e0febbe"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

var companyObjects=[];
var productObjects=[];

$(document).ready(function()
{
    var refProducts=firebase.database().ref().child("Products");
    var refCompanies=firebase.database().ref().child("Companies");

    refCompanies.on('value', function(snapshot) 
    {
        var counter=0;
        snapshot.forEach(function(childSnapshot) 
        {
             var ID=childSnapshot.key;
             var Name=childSnapshot.child("Name").val(); 
             var Email=childSnapshot.child("Email").val();             
             var Longitude=childSnapshot.child("Longitude").val(); 
             var Latitude=childSnapshot.child("Latitude").val(); 
             var Phone=childSnapshot.child("Phone").val(); 

            var companyObject = 
            { 
                "ID":ID,
                "Name":Name, 
                "Email":Email ,
                "Longitude":Longitude ,
                "Latitude":Latitude ,
                "Phone":Phone ,
            };
            companyObjects[counter]=companyObject;
            counter++;
        });
        UpdateProductTable();
      });




    refProducts.on('value', function(snapshot) 
    {
        var counter=0;
        snapshot.forEach(function(childSnapshot) 
        {
            var ID=childSnapshot.key;
             var Name=childSnapshot.child("Name").val(); 
             var CompanyID=childSnapshot.child("CompanyID").val();             
             var Longitude=childSnapshot.child("Longitude").val(); 
             var Latitude=childSnapshot.child("Latitude").val(); 
             var HarvestDate=childSnapshot.child("HarvestDate").val(); 
             var WarehouseWaitingHours=childSnapshot.child("WarehouseWaitingHours").val();
             var TransportationHours=childSnapshot.child("TransportationHours").val(); 

            var productObject = 
            { 
                "ID":ID,
                "Name":Name, 
                "CompanyID":CompanyID ,
                "Longitude":Longitude ,
                "Latitude":Latitude ,
                "HarvestDate":HarvestDate ,
                "WarehouseWaitingHours":WarehouseWaitingHours ,
                "TransportationHours":TransportationHours 
            };
            productObjects[counter++]=productObject;
        });
        UpdateProductTable();
      });
});

function UpdateProductTable()
{
    $("#tableBody").empty();
    for (i = 0; i < productObjects.length; i++) 
    { 
        var tmpCpName="none";
        for(j = 0; j < companyObjects.length; j++)
        {
            if(companyObjects[j].ID==productObjects[i].CompanyID) tmpCpName=companyObjects[j].Name;
        }

        $("#tableBody").append(
            "<tr><td>"
            +productObjects[i].ID+
            "</td><td>"
            +productObjects[i].Name+
            "</td><td>"
            +tmpCpName+
            "</td><td>"
            +productObjects[i].Longitude+
            "</td><td>"
            +productObjects[i].Latitude+
            "</td><td class=\"text-center\">"
            +productObjects[i].HarvestDate+
            "</td><td class=\"text-center\">"
            +productObjects[i].WarehouseWaitingHours+
            "</td><td class=\"text-center\">"
            +productObjects[i].TransportationHours+
            "</td><td class=\"text-center\"><button type=\"button\" class=\"btn btn-info btn-xs \""+
            "onclick=\"window.open(' https://www.google.com/maps/?q="+productObjects[i].Longitude+","+productObjects[i].Latitude+"'); \">Go Maps</button></td>/tr>");          
    }
}

function writeDATA() 
{
    writeCompanyData(1,"ATA TOHUM",37.76014,42.97187,"4285208020","info@atatohum.com");
    writeCompanyData(2,"MERT FİDANCILIK",39.65914,36.82329,"2848869928","contacs@mertfidancilik.com");
    writeCompanyData(3,"TEKBAĞ FİDANCILIK",36.00291,38.67337,"2867176577","contacs@tekbagfidancilik.com");
    writeCompanyData(4,"AMBAR TARIM ÜRÜNLERİ",39.00765,41.09613,"3289691838","contacs@ambartarimurunleri.com");
    writeCompanyData(5,"VARLIK FİDANCILIK",37.63504,42.36851,"3243033359","info@varlikfidancilik.com");
    writeCompanyData(6,"HAYAT TARIM",38.6173,40.14439,"3289691838","info@hayattarim.com");
    writeCompanyData(7,"HASBAHÇE FİDANCILIK",39.36024,41.51924,"2521621081","contacs@hasbahçefidancilik.com");
    writeCompanyData(8,"ÇINAR ZİRAAT",37.86058,43.39388,"2865271834","info@çinarziraat.com");
    writeCompanyData(9,"DOĞUŞ ZİRAAT",39.86326,41.1929,"2664130358","info@doguşziraat.com");
    writeCompanyData(10,"AKYAZI TARIM",38.95417,37.2153,"3425749982","contacs@akyazitarim.com");
    writeCompanyData(11,"AKDENİZ TARIM",37.76014,30.1152,"4541220858","info@akdeniztarim.com");
    writeCompanyData(12,"ALTINBAŞAK TARIM TİCARET",40.07161,27.36652,"2521252294","contacs@altinbaşaktarimticaret.com");
    writeCompanyData(13,"DENİZLER SEBZE MEVYE TİC.",39.0961,32.24438,"4624435879","info@denizlersebzemevyetic..com");
    writeCompanyData(14,"SAFKAN TARIM",39.41822,37.13513,"4547393362","info@safkantarim.com");
    writeCompanyData(15,"TAT TOHUMCULUK",40.02898,29.78281,"4661499598","contacs@tattohumculuk.com");
    writeCompanyData(16,"ANTALYA TARIM",39.2295,33.41884,"2622170623","contacs@antalyatarim.com");
    writeCompanyData(17,"KONYA TARIM",40.95293,38.40197,"2767331031","info@konyatarim.com");
    writeCompanyData(18,"SERTA ZİRAAT",40.14428,34.14863,"4323530038","contacs@sertaziraat.com");
    writeCompanyData(19,"SÜRDE TARIM",36.71829,28.44892,"2888699923","info@surdetarim.com");
    writeCompanyData(20,"LOTUS TOHUMCULUK",40.75118,27.78209,"3549335694","contacs@lotustohumculuk.com");
    writeCompanyData(21,"ADAPAZARI ZİRAAT",37.02824,38.94058,"2624209467","info@adapazariziraat.com");
    writeCompanyData(22,"GÜZELYALI ZİRAAT",40.61074,32.18906,"3265998705","info@guzelyaliziraat.com");
    writeCompanyData(23,"ÜNYE TARIM ÜRÜNLERİ",36.09079,31.22723,"4663150968","contacs@unyetarimurunleri.com");
    writeCompanyData(24,"AYDINLAR TARIM",39.41822,30.12552,"3821541403","info@aydinlartarim.com");
    writeCompanyData(25,"AKDAĞ TARIM",39.06236,29.44243,"2642349279","contacs@akdagtarim.com");
    
    
    
    writeProductData(1,9,"KÜLTÜR MANTARI",39.04139,36.96958,"16-09-2017",49,6);
    writeProductData(2,18,"PATLICAN",36.75323,41.96928,"16-09-2017",36,19);
    writeProductData(3,12,"KIRMIZI LAHANA",39.018,33.5871,"08-06-2017",12,12);
    writeProductData(4,19,"KABAK",37.96915,37.8176,"10-07-2017",4,7);
    writeProductData(5,17,"PATATES LUX",38.22444,29.60829,"07-08-2017",38,20);
    writeProductData(6,13,"ELMA",37.01404,41.09643,"05-10-2017",3,9);
    writeProductData(7,2,"ISPANAK TAZE",36.88149,39.00548,"28-10-2017",14,8);
    writeProductData(8,15,"TURP",37.9098,28.89652,"03-10-2017",33,10);
    writeProductData(9,20,"FASULYE",36.84443,38.85061,"27-07-2017",42,13);
    writeProductData(10,23,"PATLICAN KARNIYARIK",39.36443,32.66123,"16-08-2017",29,6);
    writeProductData(11,2,"BEZELYE",38.09714,42.01793,"06-07-2017",37,19);
    writeProductData(12,16,"DOMATES LÜX",38.48674,39.14131,"18-08-2017",14,7);
    writeProductData(13,1,"TURP",38.1527,41.34935,"16-10-2017",36,16);
    writeProductData(14,2,"PATLICAN KARNIYARIK",37.22146,30.86557,"20-07-2017",19,13);
    writeProductData(15,2,"BİBER DOLMALIK",38.71425,43.4124,"11-09-2017",49,18);
    writeProductData(16,4,"KABAK",38.41186,33.82512,"03-08-2017",12,5);
    writeProductData(17,11,"TAZE SOĞAN",40.07202,33.90883,"25-10-2017",26,15);
    writeProductData(18,6,"PIRASA",40.65838,28.44835,"01-09-2017",25,7);
    writeProductData(19,14,"FASULYE",37.94057,34.75745,"02-10-2017",14,10);
    writeProductData(20,21,"MUZ İTHAL",38.43419,33.09204,"27-06-2017",17,14);
    writeProductData(21,5,"PATATES LUX",38.89665,38.16656,"30-10-2017",9,14);
    writeProductData(22,15,"SALATALIK",36.27409,31.17751,"17-10-2017",14,14);
    writeProductData(23,9,"KEREVİZ",37.96915,29.92866,"17-06-2017",41,9);
    writeProductData(24,16,"BRÜKSEL LAHANASI",39.08618,31.9569,"02-09-2017",17,17);
    writeProductData(25,2,"TAZE SOĞAN",36.49484,39.30529,"04-06-2017",36,20);
    writeProductData(26,24,"PATATES HAŞLAMALIK",37.69142,29.5888,"20-09-2017",35,20);
    writeProductData(27,16,"PATLICAN KARNIYARIK",40.51242,32.10962,"09-06-2017",32,17);
    writeProductData(28,22,"PATATES HAŞLAMALIK",37.08155,38.71481,"16-08-2017",20,20);
    writeProductData(29,14,"PATATES LUX",37.26479,36.02756,"25-10-2017",39,20);
    writeProductData(30,8,"LİMON",37.43937,31.38755,"02-08-2017",17,11);
    writeProductData(31,10,"LİMON",38.52066,39.14131,"09-09-2017",12,12);
    writeProductData(32,6,"FASULYE",37.2268,27.2195,"01-09-2017",9,11);
    writeProductData(33,1,"PIRASA",36.67969,34.30411,"19-10-2017",20,13);
    writeProductData(34,22,"KÜLTÜR MANTARI",40.77939,36.12297,"17-09-2017",11,20);
    writeProductData(35,24,"KIRMIZI BİBER",39.86213,35.01425,"18-08-2017",49,12);
    writeProductData(36,25,"PATLICAN",36.73125,34.25823,"04-07-2017",20,14);
    writeProductData(37,19,"PATLICAN",39.64731,35.77359,"18-09-2017",22,12);
    writeProductData(38,4,"KABAK",39.19113,32.79376,"21-09-2017",19,5);
    writeProductData(39,2,"DOMATES SALKIM",38.48674,34.33652,"06-06-2017",49,5);
    writeProductData(40,6,"HAVUÇ",37.08155,39.15241,"11-07-2017",43,16);
    writeProductData(41,22,"BRÜKSEL LAHANASI",37.86772,41.34935,"21-09-2017",18,11);
    writeProductData(42,3,"MUZ İTHAL",40.73236,33.82512,"26-07-2017",25,13);
    writeProductData(43,22,"KEREVİZ",36.89247,40.62182,"21-07-2017",49,5);
    writeProductData(44,20,"DOMATES",38.45641,35.04238,"28-09-2017",23,7);
    writeProductData(45,24,"KEREVİZ",37.47102,38.24357,"04-07-2017",21,9);
    writeProductData(46,1,"PATATES ORTA",40.82787,42.84933,"30-06-2017",26,19);
    writeProductData(47,9,"BAL KABAĞI",40.67246,32.79505,"05-06-2017",30,9);
    writeProductData(48,14,"KIRMIZI BİBER",37.43937,36.02756,"06-06-2017",22,14);
    writeProductData(49,9,"LİMON",40.22896,40.73429,"08-08-2017",36,8);
    writeProductData(50,19,"SALATALIK SİLOR",37.37423,41.4155,"11-09-2017",21,18);
    writeProductData(51,4,"KIRMIZI BİBER",37.49978,35.14648,"12-09-2017",19,15);
    writeProductData(52,5,"ELMA",36.03372,27.62259,"29-08-2017",9,6);
    writeProductData(53,14,"DOMATES SALKIM",37.25686,42.87856,"26-07-2017",14,12);
    writeProductData(54,19,"BROKOLİ",39.53097,28.52996,"09-06-2017",23,18);
    writeProductData(55,2,"BİBER SİVRİ",38.93763,41.15663,"26-08-2017",13,19);
    writeProductData(56,25,"BİBER ÇARLİSTON",37.93807,35.04238,"04-08-2017",25,17);
    writeProductData(57,12,"DOMATES SALKIM",40.36819,27.21514,"08-08-2017",20,14);
    writeProductData(58,1,"KIRMIZI LAHANA",40.76377,29.47671,"19-10-2017",26,16);
    writeProductData(59,23,"PATATES HAŞLAMALIK",37.91371,34.19271,"06-06-2017",15,19);
    writeProductData(60,9,"ISPANAK TAZE",38.32392,41.34935,"23-08-2017",26,14);
    writeProductData(61,19,"KABAK",38.11467,40.70122,"05-09-2017",18,7);
    writeProductData(62,22,"KÜLTÜR MANTARI",39.59596,28.46901,"03-10-2017",41,10);
    writeProductData(63,6,"BİBER ÇARLİSTON",36.84443,39.81857,"19-09-2017",27,17);
    writeProductData(64,18,"KABAK",38.89665,30.37386,"03-08-2017",26,18);
    writeProductData(65,25,"BİBER ÇARLİSTON",36.95866,36.85799,"25-06-2017",47,14);
    writeProductData(66,25,"BRÜKSEL LAHANASI",37.22146,33.04875,"09-10-2017",44,11);
    writeProductData(67,20,"DOMATES",40.32147,34.12866,"07-09-2017",26,20);
    writeProductData(68,24,"PATLICAN KARNIYARIK",38.08733,36.12297,"19-07-2017",33,13);
    writeProductData(69,23,"BEZELYE",38.80874,30.11022,"09-09-2017",45,13);
    writeProductData(70,12,"KARA LAHANA",40.35054,36.87783,"03-07-2017",26,12);
    writeProductData(71,14,"ISPANAK TAZE",37.01404,39.83579,"19-09-2017",37,14);
    writeProductData(72,17,"BİBER SİVRİ",37.93807,42.84933,"11-08-2017",8,11);
    writeProductData(73,8,"BİBER SİVRİ",37.51691,31.5171,"26-07-2017",46,19);
    writeProductData(74,8,"DOMATES LÜX",37.98201,37.63879,"17-08-2017",28,13);
    writeProductData(75,23,"ISPANAK TAZE",40.75124,33.185,"29-06-2017",7,12);
    writeProductData(76,3,"TAZE SOĞAN",37.47102,27.50269,"12-06-2017",45,14);
    writeProductData(77,3,"ELMA",36.14465,40.75643,"07-10-2017",3,5);
    writeProductData(78,11,"BRÜKSEL LAHANASI",36.30154,28.33059,"17-08-2017",38,11);
    writeProductData(79,16,"DOMATES SALKIM",37.51691,34.33652,"09-08-2017",14,14);
    writeProductData(80,7,"BİBER DOLMALIK",38.43482,43.48305,"17-06-2017",18,12);
    writeProductData(81,19,"SEMİZ OTU",37.19309,27.50269,"23-08-2017",13,18);
    writeProductData(82,11,"KEREVİZ",37.93127,34.39385,"16-09-2017",33,11);
    writeProductData(83,21,"BİBER SİVRİ",36.73125,31.32979,"13-06-2017",43,9);
    writeProductData(84,2,"HAVUÇ",40.02653,40.11386,"21-06-2017",12,14);
    writeProductData(85,9,"SALATALIK SİLOR",39.46267,42.9305,"02-09-2017",43,20);
    writeProductData(86,14,"BİBER DOLMALIK",36.5308,30.64643,"11-07-2017",39,12);
    writeProductData(87,4,"ELMA",38.22541,40.32174,"14-06-2017",31,14);
    writeProductData(88,20,"TURP",39.23559,37.94329,"04-07-2017",11,10);
    writeProductData(89,5,"SALATALIK SİLOR",36.78023,29.94872,"24-10-2017",21,5);
    writeProductData(90,15,"LAHANA BEYAZ",36.75323,31.76583,"20-08-2017",44,19);
    writeProductData(91,17,"KABAK",40.36819,35.14648,"14-07-2017",14,8);
    writeProductData(92,6,"BİBER SİVRİ",39.38835,37.86147,"05-10-2017",40,20);
    writeProductData(93,18,"BROKOLİ",36.64031,42.87856,"09-07-2017",12,7);
    writeProductData(94,7,"BAL KABAĞI",38.85637,35.04238,"13-06-2017",5,9);
    writeProductData(95,7,"KARNABAHAR",38.68255,28.52996,"06-08-2017",22,7);
    writeProductData(96,12,"BEZELYE",36.30154,30.60804,"26-06-2017",35,12);
    writeProductData(97,2,"PATLICAN",38.08733,42.01793,"03-07-2017",24,15);
    writeProductData(98,14,"KABAK",40.77365,30.71577,"12-06-2017",41,9);
    writeProductData(99,24,"DOMATES SALKIM",36.14465,40.79196,"20-06-2017",40,20);
    writeProductData(100,4,"SALATALIK",40.51242,31.76583,"11-06-2017",27,16);
    writeProductData(101,19,"PIRASA",37.21255,39.46324,"12-08-2017",40,7);
    writeProductData(102,3,"PATATES LUX",37.69231,35.77359,"09-09-2017",36,7);
    writeProductData(103,21,"BAL KABAĞI",36.41006,41.34935,"01-06-2017",9,12);
    writeProductData(104,16,"PIRASA",40.25251,36.53489,"30-06-2017",39,14);
    writeProductData(105,17,"DOMATES SALKIM",39.86213,32.97597,"15-06-2017",41,9);
    writeProductData(106,14,"HAVUÇ",39.05458,37.9893,"30-07-2017",34,16);
    writeProductData(107,3,"DOMATES SALKIM",39.50136,28.46081,"15-06-2017",21,8);
    writeProductData(108,22,"KABAK",36.21677,33.11448,"03-06-2017",17,16);
    writeProductData(109,9,"BİBER SİVRİ",40.33086,37.0074,"14-07-2017",21,11);
    writeProductData(110,12,"TURP",39.64731,38.16656,"30-07-2017",11,14);
    writeProductData(111,20,"PATLICAN",36.56056,39.98589,"10-06-2017",35,16);
    writeProductData(112,12,"FASULYE",36.5951,29.23468,"05-06-2017",47,14);
    writeProductData(113,5,"PATATES LUX",37.4293,27.53343,"05-06-2017",49,11);
    writeProductData(114,15,"ELMA",37.98201,38.68571,"08-09-2017",47,17);
    writeProductData(115,20,"LİMON",36.7636,39.46324,"07-08-2017",34,5);
    writeProductData(116,20,"SARIMSAK",36.5309,30.91167,"04-06-2017",7,11);
    writeProductData(117,16,"TURP",36.58287,34.5988,"02-08-2017",32,9);
    writeProductData(118,17,"KIRMIZI LAHANA",37.49978,33.62964,"29-10-2017",15,10);
    writeProductData(119,17,"KIRMIZI LAHANA",36.11615,30.41975,"12-09-2017",17,18);
    writeProductData(120,6,"DOMATES",40.1334,40.08243,"19-07-2017",7,10);
    writeProductData(121,21,"DOMATES LÜX",38.43419,30.48399,"11-07-2017",9,15);
    writeProductData(122,22,"SARIMSAK",37.18526,42.05761,"19-08-2017",20,19);
    writeProductData(123,10,"PATATES ORTA",40.25251,28.46081,"01-10-2017",13,13);
    writeProductData(124,23,"KIRMIZI BİBER",39.96667,40.70122,"12-06-2017",29,18);
    writeProductData(125,24,"BEZELYE",36.99672,41.60384,"21-08-2017",41,14);
    writeProductData(126,16,"PATLICAN",37.19891,31.32979,"12-09-2017",24,12);
    writeProductData(127,12,"SALATALIK SİLOR",40.22579,36.73347,"15-10-2017",17,7);
    writeProductData(128,2,"PATLICAN KARNIYARIK",38.40225,32.4553,"05-08-2017",37,8);
    writeProductData(129,3,"KEREVİZ",40.76377,31.32979,"23-06-2017",12,18);
    writeProductData(130,15,"PATLICAN",38.18937,34.34684,"10-09-2017",9,13);
    writeProductData(131,3,"ISPANAK TAZE",36.84971,28.88542,"26-09-2017",7,19);
    writeProductData(132,3,"KIRMIZI LAHANA",36.67953,37.86147,"01-09-2017",21,12);
    writeProductData(133,14,"KARA LAHANA",37.34266,41.56693,"01-06-2017",45,12);
    writeProductData(134,6,"DOMATES LÜX",40.65838,28.33059,"03-06-2017",18,7);
    writeProductData(135,22,"DOMATES",38.59458,40.87732,"17-10-2017",29,6);
    writeProductData(136,7,"ISPANAK TAZE",36.0568,27.21514,"28-06-2017",21,9);
    writeProductData(137,22,"LAHANA BEYAZ",37.29408,40.9453,"09-10-2017",3,10);
    writeProductData(138,13,"LAHANA BEYAZ",39.22916,27.50269,"02-06-2017",25,17);
    writeProductData(139,12,"BİBER SİVRİ",37.35966,37.51215,"17-06-2017",45,5);
    writeProductData(140,8,"KEREVİZ",40.99645,43.88813,"13-10-2017",25,9);
    writeProductData(141,2,"LİMON",36.88149,38.24392,"11-07-2017",8,14);
    writeProductData(142,2,"BROKOLİ",36.56056,27.83366,"04-08-2017",43,9);
    writeProductData(143,5,"SARIMSAK",38.63027,43.4069,"18-07-2017",43,16);
    writeProductData(144,3,"SALATALIK SİLOR",38.09714,38.11146,"30-10-2017",47,13);
    writeProductData(145,4,"KARNABAHAR",38.04073,33.05633,"25-08-2017",40,12);
    writeProductData(146,11,"PATATES LUX",37.80924,31.52305,"10-10-2017",28,10);
    writeProductData(147,7,"LİMON",39.73502,39.15241,"01-07-2017",42,9);
    writeProductData(148,19,"HAVUÇ",37.25686,32.4941,"05-10-2017",38,11);
    writeProductData(149,8,"HAVUÇ",39.05458,33.185,"09-10-2017",11,7);
    writeProductData(150,11,"DOMATES",40.67246,37.66803,"24-07-2017",15,11);
    writeProductData(151,11,"SEMİZ OTU",39.1405,32.66123,"12-09-2017",21,17);
    writeProductData(152,1,"SARIMSAK",39.79124,33.34915,"28-10-2017",25,9);
    writeProductData(153,19,"HAVUÇ",37.66137,35.63103,"17-10-2017",20,16);
    writeProductData(154,19,"BROKOLİ",38.45641,34.98971,"11-07-2017",22,20);
    writeProductData(155,1,"DOMATES SALKIM",40.73236,41.00971,"01-06-2017",44,10);
    writeProductData(156,9,"KIRMIZI BİBER",39.50165,27.21514,"08-08-2017",6,6);
    writeProductData(157,10,"DOMATES LÜX",39.44938,42.6009,"08-09-2017",11,18);
    writeProductData(158,1,"DOMATES",36.80138,40.9453,"13-07-2017",18,18);
    writeProductData(159,4,"BEZELYE",38.71425,43.78749,"11-09-2017",13,18);
    writeProductData(160,17,"PATATES LUX",39.61339,40.79196,"12-06-2017",13,14);
    writeProductData(161,13,"ELMA",40.31233,29.18126,"24-06-2017",37,20);
    writeProductData(162,15,"BİBER ÇARLİSTON",37.58129,30.60309,"07-07-2017",39,19);
    writeProductData(163,16,"BİBER DOLMALIK",37.07932,28.62611,"21-08-2017",15,10);
    writeProductData(164,5,"PATLICAN KARNIYARIK",37.07932,38.64628,"21-06-2017",13,10);
    writeProductData(165,5,"LAHANA BEYAZ",38.79983,33.92462,"09-10-2017",5,15);
    writeProductData(166,15,"BROKOLİ",37.93025,39.09673,"27-07-2017",36,14);
    writeProductData(167,25,"PATATES LUX",37.7522,38.11146,"07-07-2017",5,18);
    writeProductData(168,17,"BAL KABAĞI",38.13272,38.31057,"17-10-2017",26,20);
    writeProductData(169,19,"BAL KABAĞI",40.25251,34.43031,"05-07-2017",16,13);
    writeProductData(170,11,"TAZE SOĞAN",37.35413,36.41804,"05-09-2017",11,16);
    writeProductData(171,23,"DOMATES",37.94057,31.17751,"18-07-2017",17,5);
    writeProductData(172,19,"KEREVİZ",39.67793,42.996,"14-10-2017",14,13);
    writeProductData(173,12,"MUZ İTHAL",37.90738,36.73347,"30-07-2017",16,5);
    writeProductData(174,19,"PATLICAN",40.82787,41.00971,"19-07-2017",5,15);
    writeProductData(175,19,"PATATES HAŞLAMALIK",37.94057,40.32174,"22-06-2017",48,16);
    writeProductData(176,24,"KIRMIZI BİBER",36.67969,29.5888,"17-08-2017",38,20);
    writeProductData(177,13,"PATLICAN",40.73236,38.39119,"12-07-2017",27,19);
    writeProductData(178,9,"LAHANA BEYAZ",39.49652,34.34684,"23-06-2017",30,7);
    writeProductData(179,5,"BRÜKSEL LAHANASI",38.31389,42.20783,"25-06-2017",30,17);
    writeProductData(180,16,"PATATES HAŞLAMALIK",40.79121,31.58877,"17-10-2017",10,10);
    writeProductData(181,25,"FASULYE",40.67246,27.53343,"08-07-2017",46,18);
    writeProductData(182,15,"SOĞAN",37.18526,29.73921,"06-07-2017",7,11);
    writeProductData(183,4,"MUZ İTHAL",39.30414,43.18472,"10-06-2017",27,11);
    writeProductData(184,7,"LİMON",40.92915,40.16933,"24-06-2017",45,6);
    writeProductData(185,16,"PATLICAN",39.04745,29.73921,"20-07-2017",7,5);
    writeProductData(186,9,"DOMATES SALKIM",37.01404,32.79505,"27-10-2017",43,15);
    writeProductData(187,9,"BAL KABAĞI",37.02959,35.62371,"02-08-2017",39,12);
    writeProductData(188,20,"DOMATES",38.54192,41.96928,"21-08-2017",25,9);
    writeProductData(189,11,"ISPANAK TAZE",37.91371,27.99091,"07-07-2017",33,12);
    writeProductData(190,2,"PIRASA",37.49978,37.51215,"10-10-2017",35,19);
    writeProductData(191,8,"KIRMIZI BİBER",40.61788,41.72557,"17-07-2017",18,20);
    writeProductData(192,20,"LAHANA BEYAZ",39.50165,32.66123,"20-07-2017",26,19);
    writeProductData(193,2,"KIRMIZI BİBER",37.64947,29.23468,"12-08-2017",19,8);
    writeProductData(194,12,"BİBER SİVRİ",36.90985,38.24102,"22-09-2017",17,8);
    writeProductData(195,14,"KIRMIZI LAHANA",39.53097,39.09623,"30-08-2017",44,18);
    writeProductData(196,25,"DOMATES LÜX",37.24937,43.18472,"26-09-2017",19,14);
    writeProductData(197,9,"SOĞAN",40.65838,30.37008,"16-08-2017",33,19);
    writeProductData(198,22,"DOMATES SALKIM",38.64154,43.4069,"06-07-2017",12,7);
    writeProductData(199,6,"BROKOLİ",37.91371,31.30796,"13-08-2017",24,14);
    writeProductData(200,12,"BEZELYE",38.63782,38.24102,"11-10-2017",45,12);
    writeProductData(201,25,"BİBER DOLMALIK",36.6172,41.96928,"06-06-2017",12,12);
    writeProductData(202,4,"MUZ İTHAL",36.52259,31.38755,"02-09-2017",42,17);
    writeProductData(203,18,"ISPANAK TAZE",40.75769,29.32668,"20-08-2017",6,16);
    writeProductData(204,10,"BEZELYE",37.96915,40.87732,"27-08-2017",15,18);
    writeProductData(205,13,"BRÜKSEL LAHANASI",37.35966,29.94872,"27-10-2017",39,12);
    writeProductData(206,4,"ELMA",37.24937,43.72702,"22-07-2017",27,7);
    writeProductData(207,20,"PIRASA",38.68255,27.83366,"08-06-2017",11,17);
    writeProductData(208,9,"PATATES HAŞLAMALIK",39.62255,27.15147,"01-09-2017",17,15);
    writeProductData(209,1,"BAL KABAĞI",39.46457,34.21332,"15-08-2017",26,13);
    writeProductData(210,20,"KABAK",40.32894,41.4155,"05-09-2017",33,6);
    writeProductData(211,6,"HAVUÇ",38.08733,30.86557,"17-09-2017",38,19);
    writeProductData(212,7,"SALATALIK",40.73236,36.31798,"18-10-2017",46,14);
    writeProductData(213,25,"PATLICAN",39.96667,36.34209,"02-07-2017",22,18);
    writeProductData(214,4,"FASULYE",38.45641,36.96958,"20-07-2017",26,15);
    writeProductData(215,4,"BİBER DOLMALIK",37.33383,37.63879,"26-10-2017",13,5);
    writeProductData(216,5,"BRÜKSEL LAHANASI",38.48674,42.05761,"15-09-2017",8,14);
    writeProductData(217,3,"PATLICAN",37.10777,35.77222,"02-06-2017",12,5);
    writeProductData(218,23,"MUZ İTHAL",36.56314,36.42588,"26-07-2017",47,14);
    writeProductData(219,3,"KIRMIZI BİBER",39.73502,31.91938,"11-06-2017",37,15);
    writeProductData(220,14,"SEMİZ OTU",36.5951,37.0074,"08-06-2017",3,5);
    writeProductData(221,21,"LİMON",36.32907,40.9453,"28-08-2017",32,11);
    writeProductData(222,15,"SARIMSAK",40.75769,34.93516,"12-09-2017",7,9);
    writeProductData(223,8,"TURP",38.44308,40.98729,"08-09-2017",6,17);
    writeProductData(224,18,"DOMATES",40.1334,40.32174,"15-07-2017",11,5);
    writeProductData(225,11,"SALATALIK SİLOR",36.52752,31.88408,"26-07-2017",16,20);
    writeProductData(226,14,"PATATES ORTA",37.01404,35.94415,"24-10-2017",32,19);
    writeProductData(227,12,"KÜLTÜR MANTARI",40.81104,28.48373,"17-06-2017",3,11);
    writeProductData(228,14,"HAVUÇ",39.99751,27.32376,"16-10-2017",38,11);
    writeProductData(229,11,"TAZE SOĞAN",37.63682,34.15399,"04-09-2017",40,7);
    writeProductData(230,23,"SEMİZ OTU",40.07209,31.32217,"12-10-2017",8,12);
    writeProductData(231,7,"KEREVİZ",36.91759,31.50674,"19-07-2017",27,14);
    writeProductData(232,23,"SOĞAN",36.84971,41.4155,"08-10-2017",29,11);
    writeProductData(233,15,"TAZE SOĞAN",40.18893,34.25823,"30-08-2017",12,15);
    writeProductData(234,25,"KABAK",37.5892,39.72989,"17-09-2017",20,15);
    writeProductData(235,6,"KARNABAHAR",37.18526,43.4124,"20-06-2017",23,6);
    writeProductData(236,5,"TAZE SOĞAN",40.65838,38.11146,"01-10-2017",16,5);
    writeProductData(237,13,"ISPANAK TAZE",39.05458,42.87865,"11-10-2017",34,14);
    writeProductData(238,23,"PATATES ORTA",38.09714,39.3007,"21-06-2017",30,15);
    writeProductData(239,22,"TAZE SOĞAN",38.89852,34.75745,"13-07-2017",43,10);
    writeProductData(240,14,"PATATES ORTA",40.91101,29.60448,"29-07-2017",34,12);
    writeProductData(241,15,"LAHANA BEYAZ",36.5951,33.24633,"05-08-2017",19,17);
    writeProductData(242,21,"KIRMIZI LAHANA",37.69142,37.0074,"25-09-2017",24,19);
    writeProductData(243,25,"KIRMIZI BİBER",38.85637,31.9569,"04-09-2017",47,18);
    writeProductData(244,18,"KEREVİZ",40.89706,28.46901,"22-07-2017",11,17);
    writeProductData(245,1,"MUZ İTHAL",37.02791,31.76583,"15-07-2017",43,9);
    writeProductData(246,19,"SEMİZ OTU",39.30414,34.96759,"18-07-2017",39,7);
    writeProductData(247,14,"KEREVİZ",40.22227,42.00666,"04-08-2017",31,17);
    writeProductData(248,7,"BROKOLİ",40.81104,28.53538,"04-07-2017",25,13);
    writeProductData(249,6,"DOMATES SALKIM",40.51691,41.19279,"16-10-2017",40,5);
    writeProductData(250,18,"DOMATES SALKIM",38.75092,29.00937,"06-06-2017",36,10);
    writeProductData(251,13,"DOMATES SALKIM",40.6705,41.72557,"18-09-2017",31,16);
    writeProductData(252,23,"LAHANA BEYAZ",38.87578,36.73347,"01-08-2017",12,11);
    writeProductData(253,7,"KARNABAHAR",40.21047,27.16749,"10-10-2017",16,12);
    writeProductData(254,16,"LİMON",39.3196,39.95632,"01-08-2017",21,15);
    writeProductData(255,22,"ISPANAK TAZE",37.43937,39.09673,"03-08-2017",11,13);
    writeProductData(256,24,"LİMON",37.64947,27.20567,"24-06-2017",39,13);
    writeProductData(257,2,"DOMATES SALKIM",36.44832,32.91518,"22-10-2017",41,5);
    writeProductData(258,16,"HAVUÇ",38.4365,38.33745,"13-10-2017",43,20);
    writeProductData(259,16,"DOMATES SALKIM",38.22444,33.34915,"23-06-2017",22,18);
    writeProductData(260,8,"ELMA",38.43252,28.32972,"26-08-2017",8,14);
    writeProductData(261,5,"PATLICAN",40.97062,27.35037,"08-10-2017",28,9);
    writeProductData(262,12,"DOMATES",36.52752,41.00971,"19-10-2017",9,5);
    writeProductData(263,1,"KARNABAHAR",38.95804,40.79486,"06-10-2017",11,9);
    writeProductData(264,14,"PATLICAN KARNIYARIK",37.90738,33.90883,"27-07-2017",30,20);
    writeProductData(265,2,"LİMON",36.39144,31.88408,"01-07-2017",8,18);
    writeProductData(266,19,"ELMA",40.33086,27.58971,"01-06-2017",5,10);
    writeProductData(267,5,"BRÜKSEL LAHANASI",36.41006,27.53343,"12-08-2017",40,6);
    writeProductData(268,15,"PATATES ORTA",39.08618,39.72989,"17-06-2017",41,13);
    writeProductData(269,24,"SALATALIK",38.03439,27.32376,"14-10-2017",44,5);
    writeProductData(270,5,"FASULYE",36.6172,38.57616,"07-06-2017",11,11);
    writeProductData(271,7,"BAL KABAĞI",40.78091,30.64643,"04-08-2017",6,5);
    writeProductData(272,3,"PATATES ORTA",40.48577,41.422,"11-06-2017",29,14);
    writeProductData(273,25,"DOMATES LÜX",40.32147,35.79651,"28-09-2017",49,19);
    writeProductData(274,10,"MUZ İTHAL",36.52143,43.88813,"25-07-2017",16,16);
    writeProductData(275,12,"SALATALIK SİLOR",37.69231,41.93175,"11-07-2017",6,5);
    writeProductData(276,6,"KIRMIZI BİBER",37.6554,43.6764,"01-09-2017",23,7);
    writeProductData(277,10,"SARIMSAK",36.67953,42.05761,"11-08-2017",35,8);
    writeProductData(278,21,"BİBER ÇARLİSTON",38.48332,31.76583,"26-07-2017",43,7);
    writeProductData(279,24,"LİMON",38.88132,38.57616,"08-08-2017",14,19);
    writeProductData(280,18,"ISPANAK TAZE",39.83529,33.59103,"17-06-2017",44,10);
    writeProductData(281,8,"KEREVİZ",38.65916,42.87865,"13-08-2017",31,6);
    writeProductData(282,16,"KÜLTÜR MANTARI",38.52066,42.6009,"06-06-2017",9,13);
    writeProductData(283,11,"BİBER DOLMALIK",36.30154,29.32668,"15-08-2017",33,14);
    writeProductData(284,24,"SALATALIK SİLOR",36.52752,28.02059,"12-08-2017",9,5);
    writeProductData(285,13,"KEREVİZ",38.43252,36.41804,"30-08-2017",29,18);
    writeProductData(286,13,"SEMİZ OTU",39.47082,30.71577,"02-09-2017",11,13);
    writeProductData(287,10,"KABAK",37.93098,43.72702,"20-07-2017",30,6);
    writeProductData(288,19,"DOMATES",39.53097,28.88542,"15-08-2017",20,13);
    writeProductData(289,2,"SOĞAN",37.93127,40.70122,"21-07-2017",8,11);
    writeProductData(290,15,"KEREVİZ",37.26479,38.68571,"03-07-2017",33,5);
    writeProductData(291,7,"SALATALIK",37.66137,33.74761,"18-09-2017",25,19);
    writeProductData(292,23,"KIRMIZI BİBER",40.35889,27.50269,"30-09-2017",22,14);
    writeProductData(293,15,"PATATES LUX",38.8247,39.98589,"08-06-2017",45,14);
    writeProductData(294,1,"SALATALIK",37.39737,39.09623,"21-07-2017",12,20);
    writeProductData(295,24,"SOĞAN",39.19608,30.81081,"21-06-2017",9,11);
    writeProductData(296,6,"DOMATES",36.88149,40.79196,"04-08-2017",30,8);
    writeProductData(297,1,"BİBER SİVRİ",37.62198,38.68139,"08-10-2017",31,17);
    writeProductData(298,9,"BAL KABAĞI",37.09467,28.46081,"16-09-2017",37,17);
    writeProductData(299,13,"ISPANAK TAZE",38.00636,38.57616,"30-10-2017",49,7);
    writeProductData(300,6,"PATATES HAŞLAMALIK",37.3729,36.96958,"25-06-2017",22,17);
    writeProductData(301,7,"LAHANA BEYAZ",38.53244,32.10125,"19-10-2017",33,11);
    writeProductData(302,18,"LAHANA BEYAZ",38.4365,33.25178,"26-09-2017",28,20);
    writeProductData(303,1,"BROKOLİ",39.44938,30.81081,"20-06-2017",30,19);
    writeProductData(304,16,"KIRMIZI BİBER",37.07932,29.56147,"09-10-2017",22,10);
    writeProductData(305,14,"TURP",40.92915,27.35037,"08-07-2017",40,14);
    writeProductData(306,24,"PATATES LUX",38.4365,30.64643,"29-07-2017",30,14);
    writeProductData(307,24,"FASULYE",36.89247,39.11287,"02-07-2017",28,13);
    writeProductData(308,13,"PIRASA",39.86446,28.6148,"20-08-2017",40,9);
    writeProductData(309,3,"TAZE SOĞAN",37.18526,33.44354,"03-10-2017",5,11);
    writeProductData(310,25,"PATATES HAŞLAMALIK",37.93098,41.93236,"05-10-2017",23,11);
    writeProductData(311,6,"KARNABAHAR",37.37423,29.60829,"07-06-2017",47,5);
    writeProductData(312,7,"LAHANA BEYAZ",36.4491,38.24102,"03-06-2017",8,19);
    writeProductData(313,4,"BROKOLİ",37.49978,34.27021,"24-06-2017",43,18);
    writeProductData(314,21,"BAL KABAĞI",40.51691,37.9893,"21-09-2017",29,15);
    writeProductData(315,6,"SALATALIK",36.4491,41.37427,"07-07-2017",4,18);
    writeProductData(316,19,"PATATES HAŞLAMALIK",37.2268,39.11287,"06-07-2017",48,17);
    writeProductData(317,14,"KIRMIZI LAHANA",39.79124,30.34983,"22-07-2017",18,6);
    writeProductData(318,14,"ELMA",40.77365,34.15399,"03-07-2017",16,13);
    writeProductData(319,11,"LİMON",38.79983,31.17669,"29-10-2017",13,9);
    writeProductData(320,13,"SARIMSAK",36.90985,41.93236,"26-06-2017",17,15);
    writeProductData(321,22,"KARA LAHANA",39.22665,38.54259,"15-06-2017",22,18);
    writeProductData(322,23,"MUZ İTHAL",39.95551,35.77359,"08-08-2017",42,20);
    writeProductData(323,25,"SEMİZ OTU",38.65916,32.10962,"19-08-2017",49,17);
    writeProductData(324,9,"ELMA",38.53244,41.60384,"03-07-2017",46,7);
    writeProductData(325,10,"PATATES LUX",40.6705,30.81081,"30-10-2017",31,9);
    writeProductData(326,12,"ISPANAK TAZE",38.89852,34.4587,"10-10-2017",19,13);
    writeProductData(327,19,"BİBER SİVRİ",37.98201,37.0074,"13-07-2017",16,20);
    writeProductData(328,24,"KARNABAHAR",37.5892,27.64242,"19-07-2017",8,18);
    writeProductData(329,25,"KABAK",39.19113,42.01793,"02-08-2017",18,17);
    writeProductData(330,3,"DOMATES SALKIM",38.64154,35.14648,"25-09-2017",34,15);
    writeProductData(331,2,"DOMATES",37.25686,40.87732,"23-06-2017",47,9);
    writeProductData(332,10,"DOMATES",40.51242,41.93236,"09-08-2017",11,13);
    writeProductData(333,15,"SARIMSAK",36.17118,34.19271,"29-06-2017",40,20);
    writeProductData(334,9,"ISPANAK TAZE",38.83352,41.51713,"19-10-2017",49,8);
    writeProductData(335,25,"ELMA",40.97062,42.9305,"23-06-2017",29,18);
    writeProductData(336,4,"BİBER SİVRİ",39.53097,37.86147,"18-07-2017",44,19);
    writeProductData(337,16,"TAZE SOĞAN",38.78252,33.25119,"11-07-2017",6,8);
    writeProductData(338,16,"PIRASA",40.85715,30.37386,"23-07-2017",14,14);
    writeProductData(339,15,"TAZE SOĞAN",37.39737,38.31057,"21-07-2017",37,18);
    writeProductData(340,4,"KÜLTÜR MANTARI",38.00301,36.42588,"18-08-2017",41,14);
    writeProductData(341,24,"LİMON",36.60965,34.98971,"19-06-2017",18,9);
    writeProductData(342,18,"BİBER DOLMALIK",37.9098,30.3718,"03-07-2017",24,15);
    writeProductData(343,15,"KARNABAHAR",40.85105,43.72702,"27-10-2017",4,5);
    writeProductData(344,16,"BİBER DOLMALIK",36.38876,42.01793,"17-10-2017",6,13);
    writeProductData(345,22,"SOĞAN",36.96993,33.92462,"26-07-2017",48,12);
    writeProductData(346,19,"TAZE SOĞAN",40.02653,38.68139,"29-07-2017",5,18);
    writeProductData(347,14,"BİBER ÇARLİSTON",39.5059,30.71723,"03-10-2017",15,14);
    writeProductData(348,24,"LİMON",39.95787,41.60384,"23-09-2017",22,9);
    writeProductData(349,11,"SOĞAN",40.51242,33.25119,"23-08-2017",30,14);
    writeProductData(350,8,"KARNABAHAR",40.32147,39.09673,"07-10-2017",33,19);
    writeProductData(351,20,"BİBER SİVRİ",37.69142,41.18422,"18-08-2017",4,7);
    writeProductData(352,6,"ELMA",38.89665,41.96928,"01-09-2017",18,12);
    writeProductData(353,12,"BİBER ÇARLİSTON",37.21255,40.73429,"04-06-2017",6,9);
    writeProductData(354,14,"KARA LAHANA",40.77365,28.53538,"07-09-2017",25,12);
    writeProductData(355,25,"BROKOLİ",38.3145,35.18773,"28-10-2017",43,5);
    writeProductData(356,5,"HAVUÇ",40.79121,34.98971,"22-10-2017",37,6);
    writeProductData(357,4,"BRÜKSEL LAHANASI",40.22896,34.4587,"10-07-2017",17,11);
    writeProductData(358,24,"PATATES LUX",38.43482,34.93516,"13-08-2017",12,14);
    writeProductData(359,9,"BAL KABAĞI",36.7636,30.60309,"27-08-2017",22,11);
    writeProductData(360,21,"KABAK",38.00301,41.96928,"09-10-2017",15,15);
    writeProductData(361,5,"SARIMSAK",40.39761,37.28814,"15-09-2017",18,12);
    writeProductData(362,3,"BAL KABAĞI",36.27089,41.19279,"22-10-2017",29,10);
    writeProductData(363,10,"ELMA",38.85637,29.82932,"13-10-2017",29,8);
    writeProductData(364,24,"BRÜKSEL LAHANASI",38.32392,31.17751,"01-06-2017",34,6);
    writeProductData(365,22,"BRÜKSEL LAHANASI",38.68255,32.79505,"15-08-2017",18,9);
    writeProductData(366,24,"PATATES HAŞLAMALIK",40.75769,27.08506,"10-08-2017",7,20);
    writeProductData(367,2,"FASULYE",40.81104,27.02745,"09-10-2017",30,5);
    writeProductData(368,12,"MUZ İTHAL",39.99751,30.64643,"26-06-2017",16,17);
    writeProductData(369,21,"PIRASA",40.82787,43.16155,"04-08-2017",34,16);
    writeProductData(370,5,"BEZELYE",37.08155,36.87528,"16-07-2017",14,10);
    writeProductData(371,15,"DOMATES",37.91371,31.49138,"09-06-2017",11,20);
    writeProductData(372,24,"SARIMSAK",38.78252,34.21332,"10-08-2017",19,14);
    writeProductData(373,18,"SEMİZ OTU",38.13272,40.79196,"04-07-2017",9,15);
    writeProductData(374,24,"MUZ İTHAL",37.22146,37.19168,"03-07-2017",48,6);
    writeProductData(375,25,"KARNABAHAR",39.4799,38.39119,"17-08-2017",41,18);
    writeProductData(376,2,"KEREVİZ",36.58287,42.1851,"06-07-2017",21,6);
    writeProductData(377,23,"MUZ İTHAL",37.19309,31.9569,"17-07-2017",24,8);
    writeProductData(378,2,"DOMATES LÜX",37.90738,27.79944,"16-10-2017",18,9);
    writeProductData(379,14,"PATLICAN KARNIYARIK",38.32392,39.09623,"12-07-2017",4,9);
    writeProductData(380,17,"PATATES ORTA",40.51242,34.19271,"26-06-2017",7,7);
    writeProductData(381,9,"KARNABAHAR",37.93098,41.30024,"27-06-2017",9,6);
    writeProductData(382,12,"KÜLTÜR MANTARI",39.50136,33.09569,"14-06-2017",45,20);
    writeProductData(383,1,"KIRMIZI LAHANA",39.82796,31.17669,"24-06-2017",31,5);
    writeProductData(384,1,"TAZE SOĞAN",37.18526,39.00548,"24-06-2017",4,20);
    writeProductData(385,25,"KARA LAHANA",38.26456,38.16656,"01-10-2017",20,5);
    writeProductData(386,24,"PATLICAN",40.35889,38.39119,"09-09-2017",44,12);
    writeProductData(387,17,"SOĞAN",37.51691,40.79486,"25-10-2017",26,6);
    writeProductData(388,24,"KIRMIZI LAHANA",38.63782,40.75643,"22-07-2017",34,12);
    writeProductData(389,18,"BİBER ÇARLİSTON",39.16376,32.10125,"24-08-2017",8,11);
    writeProductData(390,6,"ISPANAK TAZE",38.63128,41.422,"20-10-2017",46,17);
    writeProductData(391,13,"KARA LAHANA",36.94952,28.89652,"30-07-2017",44,10);
    writeProductData(392,11,"TURP",37.77586,41.422,"21-09-2017",26,8);
    writeProductData(393,16,"SEMİZ OTU",39.1405,31.58877,"02-08-2017",22,6);
    writeProductData(394,13,"KARNABAHAR",38.61331,33.185,"19-06-2017",30,11);
    writeProductData(395,23,"TURP",39.1405,34.5988,"09-10-2017",16,6);
    writeProductData(396,3,"PATATES LUX",40.77939,27.20567,"17-07-2017",20,12);
    writeProductData(397,10,"FASULYE",38.00301,43.66047,"11-09-2017",9,8);
    writeProductData(398,2,"MUZ İTHAL",37.93098,32.79505,"12-06-2017",10,20);
    writeProductData(399,2,"PATLICAN",40.75124,33.34171,"10-09-2017",48,13);
    writeProductData(400,15,"BROKOLİ",39.19608,32.91518,"19-06-2017",39,14);
    writeProductData(401,1,"BİBER ÇARLİSTON",39.548,32.10962,"21-09-2017",41,8);
    writeProductData(402,4,"LİMON",38.14873,27.99091,"29-06-2017",7,10);
    writeProductData(403,12,"BİBER DOLMALIK",37.08155,33.04875,"05-10-2017",8,15);
    writeProductData(404,2,"DOMATES SALKIM",37.34266,36.87783,"16-06-2017",43,9);
    writeProductData(405,9,"KÜLTÜR MANTARI",39.018,39.09623,"30-09-2017",36,18);
    writeProductData(406,23,"BRÜKSEL LAHANASI",40.5653,37.8176,"23-07-2017",7,6);
    writeProductData(407,1,"SEMİZ OTU",36.3121,41.00971,"12-07-2017",43,8);
    writeProductData(408,23,"BEZELYE",36.14465,35.47788,"27-09-2017",35,18);
    writeProductData(409,8,"SEMİZ OTU",36.11615,42.05761,"14-09-2017",10,5);
    writeProductData(410,2,"SARIMSAK",39.4808,33.0496,"12-09-2017",3,14);
    writeProductData(411,3,"HAVUÇ",37.62198,27.16749,"19-09-2017",42,12);
    writeProductData(412,5,"SEMİZ OTU",38.78252,35.59825,"13-06-2017",40,14);
    writeProductData(413,12,"KIRMIZI BİBER",37.47102,27.58971,"02-09-2017",48,15);
    writeProductData(414,4,"ELMA",37.66137,31.17751,"05-07-2017",6,11);
    writeProductData(415,13,"FASULYE",36.88149,31.91938,"20-09-2017",21,20);
    writeProductData(416,9,"HAVUÇ",39.95787,36.96958,"20-09-2017",14,5);
    writeProductData(417,22,"BİBER DOLMALIK",37.91371,28.93883,"22-09-2017",47,10);
    writeProductData(418,5,"KARNABAHAR",39.26254,35.18773,"24-08-2017",46,12);
    writeProductData(419,17,"BİBER ÇARLİSTON",39.04745,31.50674,"13-10-2017",37,10);
    writeProductData(420,3,"KARNABAHAR",36.6172,34.15399,"08-09-2017",9,11);
    writeProductData(421,22,"BİBER DOLMALIK",37.18526,40.79486,"10-06-2017",18,10);
    writeProductData(422,20,"BRÜKSEL LAHANASI",40.25251,37.10816,"10-10-2017",38,19);
    writeProductData(423,19,"TURP",38.22541,37.51215,"07-06-2017",35,15);
    writeProductData(424,3,"LİMON",39.95787,40.79196,"22-06-2017",37,11);
    writeProductData(425,24,"MUZ İTHAL",36.94952,43.16155,"23-09-2017",21,11);
    writeProductData(426,14,"FASULYE",36.11615,41.95148,"05-10-2017",4,9);
    writeProductData(427,10,"SALATALIK SİLOR",38.43252,35.14648,"27-08-2017",8,8);
    writeProductData(428,6,"BRÜKSEL LAHANASI",38.45641,31.50674,"21-08-2017",32,10);
    writeProductData(429,24,"KARNABAHAR",40.25251,36.10436,"26-09-2017",6,14);
    writeProductData(430,1,"ELMA",38.72114,36.3956,"14-08-2017",49,15);
    writeProductData(431,13,"PATATES ORTA",36.17118,32.80927,"28-09-2017",39,20);
    writeProductData(432,2,"FASULYE",38.84584,40.79486,"24-06-2017",32,17);
    writeProductData(433,24,"KARA LAHANA",39.63422,37.10816,"25-10-2017",32,20);
    writeProductData(434,4,"KEREVİZ",39.96667,42.86921,"27-06-2017",44,7);
    writeProductData(435,4,"BİBER DOLMALIK",36.32907,30.48399,"24-08-2017",17,9);
    writeProductData(436,2,"SALATALIK SİLOR",38.9639,40.25968,"12-08-2017",31,16);
    writeProductData(437,10,"DOMATES SALKIM",36.0568,27.35037,"23-08-2017",23,8);
    writeProductData(438,17,"TURP",39.57648,36.12297,"19-10-2017",15,13);
    writeProductData(439,10,"ELMA",40.33086,33.24633,"15-08-2017",32,14);
    writeProductData(440,14,"KIRMIZI BİBER",40.17857,33.90883,"27-06-2017",3,20);
    writeProductData(441,13,"FASULYE",40.31233,42.87856,"11-06-2017",22,19);
    writeProductData(442,5,"SALATALIK",39.05458,38.85061,"15-08-2017",13,14);
    writeProductData(443,13,"PATLICAN",38.78465,27.50269,"04-09-2017",49,6);
    writeProductData(444,3,"BİBER ÇARLİSTON",39.82796,37.94024,"28-10-2017",6,13);
    writeProductData(445,23,"BRÜKSEL LAHANASI",38.72114,41.56693,"30-08-2017",6,12);
    writeProductData(446,22,"LİMON",40.75124,35.0198,"25-06-2017",42,8);
    writeProductData(447,16,"DOMATES SALKIM",39.65153,27.09524,"14-08-2017",23,9);
    writeProductData(448,20,"KARA LAHANA",37.80924,33.30518,"16-09-2017",42,6);
    writeProductData(449,2,"FASULYE",37.47769,42.84933,"16-09-2017",5,10);
    writeProductData(450,16,"SARIMSAK",37.26479,43.63236,"06-08-2017",11,12);
    writeProductData(451,20,"LİMON",40.73236,35.59825,"05-10-2017",27,14);
    writeProductData(452,11,"BEZELYE",37.3729,29.51696,"11-10-2017",42,8);
    writeProductData(453,9,"PATLICAN",40.17857,36.73347,"19-07-2017",24,11);
    writeProductData(454,24,"KABAK",38.59451,39.00548,"01-08-2017",22,9);
    writeProductData(455,19,"KABAK",36.3121,33.25178,"14-06-2017",24,15);
    writeProductData(456,16,"KIRMIZI BİBER",37.70023,34.33652,"30-07-2017",5,15);
    writeProductData(457,13,"BRÜKSEL LAHANASI",39.30414,27.70893,"26-07-2017",49,10);
    writeProductData(458,21,"SALATALIK",36.49609,31.5171,"05-08-2017",18,13);
    writeProductData(459,4,"BİBER SİVRİ",38.31389,31.91331,"14-07-2017",45,16);
    writeProductData(460,5,"TAZE SOĞAN",40.48577,32.4553,"13-08-2017",8,10);
    writeProductData(461,21,"SEMİZ OTU",38.44308,42.01793,"07-09-2017",21,15);
    writeProductData(462,10,"SOĞAN",38.26456,40.70122,"08-07-2017",25,19);
    writeProductData(463,4,"BİBER DOLMALIK",40.14401,31.9569,"13-07-2017",36,8);
    writeProductData(464,21,"LİMON",39.5059,28.46185,"08-07-2017",43,20);
    writeProductData(465,19,"PATLICAN KARNIYARIK",39.96667,40.97364,"24-08-2017",10,18);
    writeProductData(466,4,"KABAK",38.8247,41.60384,"13-07-2017",35,17);
    writeProductData(467,4,"LAHANA BEYAZ",37.35966,41.19279,"21-09-2017",44,6);
    writeProductData(468,23,"KARA LAHANA",40.54384,41.56693,"22-09-2017",26,10);
    writeProductData(469,7,"KIRMIZI BİBER",36.27409,30.41975,"16-07-2017",27,13);
    writeProductData(470,8,"LİMON",40.17857,41.18422,"14-07-2017",19,16);
    writeProductData(471,1,"PATLICAN",38.68634,43.16155,"27-06-2017",22,12);
    writeProductData(472,23,"SALATALIK",40.36083,41.18575,"18-08-2017",42,10);
    writeProductData(473,1,"PATLICAN KARNIYARIK",39.68952,27.2238,"23-06-2017",8,18);
    writeProductData(474,11,"LİMON",37.42624,34.25823,"09-06-2017",5,16);
    writeProductData(475,22,"KARA LAHANA",36.97421,36.96958,"20-06-2017",7,13);
    writeProductData(476,8,"SEMİZ OTU",40.85105,35.14232,"23-06-2017",26,19);
    writeProductData(477,12,"PATATES ORTA",40.92915,42.05761,"17-08-2017",44,20);
    writeProductData(478,17,"LİMON",40.17857,31.32217,"11-06-2017",13,13);
    writeProductData(479,19,"ELMA",40.33086,36.34209,"17-10-2017",20,19);
    writeProductData(480,9,"KEREVİZ",37.94057,43.18472,"06-07-2017",28,13);
    writeProductData(481,16,"PIRASA",36.27409,39.14131,"05-06-2017",25,19);
    writeProductData(482,7,"SOĞAN",37.10777,39.15788,"09-06-2017",13,13);
    writeProductData(483,10,"PIRASA",36.3121,31.32217,"10-06-2017",6,19);
    writeProductData(484,24,"SOĞAN",37.19891,37.63879,"01-10-2017",43,12);
    writeProductData(485,19,"KABAK",36.80138,31.17669,"06-09-2017",10,8);
    writeProductData(486,2,"SARIMSAK",39.4808,28.93883,"06-06-2017",10,12);
    writeProductData(487,13,"SALATALIK SİLOR",37.49978,28.02059,"03-10-2017",31,13);
    writeProductData(488,1,"KIRMIZI LAHANA",37.63682,39.58097,"19-10-2017",25,11);
    writeProductData(489,20,"PATATES LUX",40.36819,28.52996,"01-08-2017",15,6);
    writeProductData(490,5,"BRÜKSEL LAHANASI",36.87507,35.60713,"17-08-2017",31,18);
    writeProductData(491,9,"KIRMIZI LAHANA",40.22897,40.73429,"10-07-2017",15,17);
    writeProductData(492,20,"PATATES ORTA",38.53244,38.68571,"10-06-2017",6,11);
    writeProductData(493,3,"BEZELYE",36.82156,38.24392,"05-09-2017",8,10);
    writeProductData(494,20,"PATATES LUX",39.3196,33.44617,"09-09-2017",48,8);
    writeProductData(495,2,"BRÜKSEL LAHANASI",40.32147,30.34983,"23-08-2017",13,8);
    writeProductData(496,7,"TURP",40.18123,27.58971,"17-09-2017",26,17);
    writeProductData(497,25,"TAZE SOĞAN",37.80616,31.03725,"25-10-2017",31,10);
    writeProductData(498,18,"DOMATES",37.86772,39.00548,"16-08-2017",21,18);
    writeProductData(499,9,"DOMATES LÜX",39.05618,32.10125,"30-06-2017",31,9);
    writeProductData(500,23,"DOMATES LÜX",38.70083,30.91167,"17-10-2017",24,9);
    
    
}







function writeProductData(ID,companyID, name, longitude, latitude,harvestDate,warehouseWaitingHours,transportationHours) 
{
    firebase.database().ref('Products/'+ID).set(
        {
            Name:name,
            CompanyID:companyID,
            Longitude:longitude,
            Latitude:latitude,
            HarvestDate:harvestDate,
            WarehouseWaitingHours:warehouseWaitingHours,
            TransportationHours:transportationHours
        });
}



function writeCompanyData(ID, name, longitude, latitude,phone, email) 
{
    firebase.database().ref('Companies/'+ID).set(
        {
            Name:name,
            Longitude:longitude,
            Latitude:latitude,
            Phone:phone,
            Email:email

        });
}





/*function getData()
{
    var parameter=document.getElementById("txtForQuery");
    var parameterValue=parameter.value;
    parameter.value="";

    var index=-1;
    for (i = 0; i <accountObjects.length; i++) 
    {
        if (accountObjects[i].cardID === parameterValue ) 
        { 
            index=i;
            break; 
        }
    }

    if(index===-1) 
    {
        
    }

    else
    {

    }
}*/











// function processForm(e) 
// {
//     if (e.preventDefault) e.preventDefault();

//     /* do what you want with the form */

//     alert(document.getElementById("frm1text").value);

//     form.submit();




//     // You must return false to prevent the default form behavior
//     return false;
// }

// var form = document.getElementById('getDataForm1');
// if (form.attachEvent) 
// {
//     form.attachEvent("submit", processForm);
// } else 
// {
//     form.addEventListener("submit", processForm);
// }











/*
var mainText=document.getElementById("mainText");
var submitBtn=document.getElementById("submitBtn");
var getDataBtn=document.getElementById("getDataBtn");
var demoP=document.getElementById("demoP");
var heading=document.getElementById("heading");


var fireBaseRefForRetriving=firebase.database().ref("Heading");
fireBaseRefForRetriving.on('value',function(datasnapshot)
{
    heading.innerText=datasnapshot.val();
});


function submitClick()
{
    var firebaseRef=firebase.database().ref();
    demoP.innerHTML=new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds();

    var timeStamp=new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds();
    firebaseRef.child(timeStamp).set(mainText.value);

    mainText.value="";



}

function getDataClick()
{

}



function addValueKeyClick()
{
    var firebaseRef=firebase.database().ref();
    
    var key=document.getElementById("txtKey").value;
    var value=document.getElementById("txtValue").value;

    firebaseRef.child(key).set(value);

    mainText.value="";
}*/
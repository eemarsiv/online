let selectedClass = 0;
let selectedTerm = 0;
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
function showClasses(cls) {
    selectedClass = cls;
    document.getElementById("mainPage").classList.add("hidden");
    document.getElementById("classPage").classList.remove("hidden");
    document.getElementById("classTitle").innerText = cls + ". Sınıf";
}
function showTerms(term) {
    selectedTerm = term;
    document.getElementById("classPage").classList.add("hidden");
    document.getElementById("termPage").classList.remove("hidden");
    document.getElementById("termTitle").innerText = selectedClass + ". Sınıf " + term + ". Dönem";
    generateCourseButtons();
}
function goBack(page) {
    document.querySelectorAll(".container").forEach(el => el.classList.add("hidden"));
    document.getElementById(page).classList.remove("hidden");
}
function generateCourseButtons() {
    const courseButtons = document.getElementById("courseButtons");
    courseButtons.innerHTML = "";

    if (courses[selectedClass] && courses[selectedClass][selectedTerm]) {
        courses[selectedClass][selectedTerm].forEach(course => {
            let btn = document.createElement("button");
            btn.innerText = course;
            btn.onclick = function() { 
                let url = driveLinks[course] || "https://drive.google.com";
                window.open(url, "_blank"); 
            };
            courseButtons.appendChild(btn);
        });
    }
}
const courses = {
    1: { 1: ["FİZİK I"],
         2: ["MÜHENDİSLER İÇİN LİNEER CEBİR", "ELEKTRİK-ELEKTRONİK MÜHENDİSLİĞİNE GİRİŞ", "MATEMATİK-II"] },
    2: { 1: ["DEVRE ANALİZİ I", "ELEKTRONİK ELEMANLAR", "MÜHENDİSLİK MATEMATİĞİ I", "LOJİK DEVRELERE GİRİŞ", "MÜHENDİSLER İÇİN OLASILIK TEORİSİ VE İSTATİSTİK", "MÜHENDİSLİK İÇİN DİFERANSİYEL DENKLEMLER", "TEKNİK YABANCI DİL I", "ÖLÇME VE ANALİZ LABORATUARI"],
         2: ["DEVRE ANALİZİ II", "ELEKTRONİK DEVRELER I", "SAYISAL ÇÖZÜMLEME", "LOJİK DEVRE TASARIMI", "MÜHENDİSLİK MATEMATİĞİ II", "TEKNİK YABANCI DİL II", "ELEKTRONİK DEVRE LABORATUARI I", "LOJİK LABORATUARI"] },
    3: { 1: ["ELEKTRİK MAKİNALARI", "ELEKTRONİK DEVRELER II", "ELEKTRONİK DEVRE LABORATUARI II", "MİKROİŞLEMCİLER", "ELEKTROMAGNETİK ALANLAR TEORİSİ", "İŞARETLER VE SİSTEMLER", "BİLİM TEKNOLOJİ VE MÜHENDİSLİK","DİJİTAL ELEKTRONİK","ENDÜSTRİYEL ELEKTRONİK","AR-GE, İNOVASYON VE TEKNOLOJİ YÖNETİMİ","MİKRODENETLEYİCİLER","RF DEVRELERİNE GİRİŞ"],
         2: ["OTOMATİK KONTROL", "HABERLEŞME MÜHENDİSLİĞİNİN TEMELLERİ", "ELEKTROMAGNETİK DALGALAR TEORİSİ", "ELEKTRİK TESİSLERİ", "DİJİTAL ELEKTRONİK", "ENDÜSTRİYEL ELEKTRONİK", "AR-GE, İNOVASYON VE TEKNOLOJİ YÖNETİMİ", "MİKRODENETLEYİCİLER"] },
    4: { 1: ["HABERLEŞME LABORATUARI","ANTENLER", "HİBRİD VE ELEKTRİKLİ ARAÇ TEKNOLOJİSİ","TIP ELEKTRONİĞİ", "KONTROL LABORATUARI","NANOTEKNOLOJİNİN TEMELLERİ", "OPTİK HABERLEŞME","OPTO ELEKTRONİK", "BİLGİSAYAR DESTEKLİ DEVRE TASARIMI","FOTONİK UYGULAMALARI", "DEVRE SENTEZİ","TASARIM ALGORİTMALARI","ELEKTROMAGNETİK ALANLARIN BİYOLOJİK ETKİLERİ","YAPAY ZEKA VE MÜHENDİSLİK UYGULAMALARI","BİLGİSAYARLI GÖRÜ","GÖMÜLÜ SİSTEMLERİN UYGULAMALARI","BİYOMEDİKAL ENSTRUMANTASYON" ],
         2: ["YÜKSEK GERİLİM TEKNİĞİ","ANTENLER", "HİBRİD VE ELEKTRİKLİ ARAÇ TEKNOLOJİSİ","TIP ELEKTRONİĞİ", "KONTROL LABORATUARI","NANOTEKNOLOJİNİN TEMELLERİ", "OPTİK HABERLEŞME","OPTO ELEKTRONİK", "BİLGİSAYAR DESTEKLİ DEVRE TASARIMI","FOTONİK UYGULAMALARI", "DEVRE SENTEZİ","TASARIM ALGORİTMALARI","ELEKTROMAGNETİK ALANLARIN BİYOLOJİK ETKİLERİ","YAPAY ZEKA VE MÜHENDİSLİK UYGULAMALARI","BİLGİSAYARLI GÖRÜ","GÖMÜLÜ SİSTEMLERİN UYGULAMALARI","BİYOMEDİKAL ENSTRUMANTASYON"] }
};
const driveLinks = {
    "DEVRE ANALİZİ I": "https://drive.google.com/drive/folders/15jGk2-AKdMuNyA4e2apVSLN2WNkTXb4V?usp=sharing",
    "MÜHENDİSLİK İÇİN DİFERANSİYEL DENKLEMLER": "https://drive.google.com/drive/folders/1HoOrgrbw04uoMmzUbuaoRI3F9afOciw1?usp=sharing",
    "ELEKTRONİK ELEMANLAR": "https://drive.google.com/drive/folders/126fmp3pBkMZLD03TduYEtC15isZrQz8G?usp=sharing",
    "TEKNİK YABANCI DİL I": "https://drive.google.com/drive/folders/1JAwRgXQ1UoQoFAWB_6_pHyGKUkYvOzHP?usp=sharing",
    "LOJİK DEVRELERE GİRİŞ": "https://drive.google.com/drive/folders/1WNyeYM48hosoAImTWq25a5MxzHcGBPaA?usp=sharing",
    "MÜHENDİSLER İÇİN OLASILIK TEORİSİ VE İSTATİSTİK": "https://drive.google.com/drive/folders/12rH0SqwdDgrItmcLbWxDxRakovav5DGp?usp=sharing",
    "ELEKTRONİK DEVRELER I": "https://drive.google.com/drive/folders/16_-M6bRmuDiCEn097bwlmha7ko1Vok5G?usp=sharing",
    "SAYISAL ÇÖZÜMLEME": "https://drive.google.com/drive/folders/11Yn_DCzJGM408D44rhXN6svx28C1EQiK?usp=sharing",
    "LOJİK DEVRE TASARIMI": "https://drive.google.com/drive/folders/19cSvgjKLnkGjuRDcfnaQhgjCwLsugScX?usp=sharing",
    "MÜHENDİSLİK MATEMATİĞİ II": "https://drive.google.com/drive/folders/1--uGxAi9C-FfaTK0Q4QBOunUK0YKQTmj?usp=sharing",
    "OTOMATİK KONTROL": "https://drive.google.com/drive/folders/1K8dP5qSO3T6o4ilVqkv-DtUN6m1FJyR9?usp=sharing",
    "ELEKTRİK TESİSLERİ": "https://drive.google.com/drive/folders/17gMPjabaaDd-B_FJ2HmZQ6cnEEvOauL9?usp=sharing",
    "HABERLEŞME MÜHENDİSLİĞİNİN TEMELLERİ": "https://drive.google.com/drive/folders/1cWzyRFfwbEszYf8E0gp2-Rm5uhSeFHOt?usp=sharing",
    "DEVRE ANALİZİ II": "https://drive.google.com/drive/folders/1E23LitUOAvpKyxPaL_ETWkDb-HBcK-W_?usp=sharing",
    "ELEKTROMAGNETİK DALGALAR TEORİSİ": "https://drive.google.com/drive/folders/1-4hjApP-3ZIPyiA4KBlPbkeHnyPdWri8?usp=sharing",
    "ELEKTRİK MAKİNALARI": "https://drive.google.com/drive/folders/14Aom9jT2kWhRg2SQg5-EXYwkAUTAh2fo?usp=sharing",
    "ELEKTRİK-ELEKTRONİK MÜHENDİSLİĞİNE GİRİŞ": "https://drive.google.com/drive/folders/1DL-ku1utJW2Te1BK6ozxS6ycbLD3pjB5?usp=sharing",
    "MÜHENDİSLER İÇİN LİNEER CEBİR": "https://drive.google.com/drive/folders/1JsomDAfleEbkqCUXYFYf4uPgmT4yALJg?usp=sharing",
    "MATEMATİK-II": "https://drive.google.com/drive/folders/1nYd1nE1JfSOGIqYyQAVL0e6ud0Xd3d4q?usp=sharing",
    "FİZİK I": "https://drive.google.com/drive/folders/1_IyMu_GHT9btBza7WMHNqIA2MQvvD60i?usp=sharing",
    "ANTENLER": "https://drive.google.com/drive/folders/1mYoQ74z2PD9C-n1ao29B2vVgEGIfre0f?usp=sharing",
    "HABERLEŞME LABORATUARI": "https://drive.google.com/drive/folders/1Q_HBeBwmY5-wiKTbY7O-3QpGYNjeptjc?usp=sharing",
    "HİBRİD VE ELEKTRİKLİ ARAÇ TEKNOLOJİSİ": "https://drive.google.com/drive/folders/1UpDLVgoQmZTNLii-Pz5OkdpEIWlJvbyQ?usp=sharing",
    "TIP ELEKTRONİĞİ": "https://drive.google.com/drive/folders/1aD0ydMvpO4hteyeYuSyp0c1M8hu7CDLa?usp=sharing",
    "KONTROL LABORATUARI": "https://drive.google.com/drive/folders/1i_NCPJ6f4fYAMDUdHK1jpuoF1Zgu6aGl?usp=sharing",
    "NANOTEKNOLOJİNİN TEMELLERİ": "https://drive.google.com/drive/folders/1inoXFTdjyQ7M4VdKLaNLEjQ7b59qto2T?usp=sharing",
    "YÜKSEK GERİLİM TEKNİĞİ": "https://drive.google.com/drive/folders/1NaRWCyfL5xPOa7V5-pHXKfjYBtFD6Pik?usp=sharing",
    "OPTİK HABERLEŞME": "https://drive.google.com/drive/folders/1LDKKqTavKsUo8xTcjfJOZOE6f5eIC0ub?usp=sharing",
    "OPTO ELEKTRONİK": "https://drive.google.com/drive/folders/1GgZ6o56p8t83F1Bo6IzNE5koHpa8qeAh?usp=sharing",
    "BİLGİSAYAR DESTEKLİ DEVRE TASARIMI": "https://drive.google.com/drive/folders/1O49pGj8jY4AkzdhysJHuxIjoLEL6qXTo?usp=sharing",
    "FOTONİK UYGULAMALARI": "https://drive.google.com/drive/folders/1Vzte9X0UuD-w-amqRwUOA48fLXr3AoRQ?usp=sharing",
    "DEVRE SENTEZİ": "https://drive.google.com/drive/folders/14XvCcKTr7BZXlKsTsi8xMeBiK4EGwwIQ?usp=sharing",
    "TASARIM ALGORİTMALARI": "https://drive.google.com/drive/folders/1biPCwUYouW7-WHzqqtT5Mr2qbgNZ8Fxt?usp=sharing",
    "ELEKTROMAGNETİK ALANLARIN BİYOLOJİK ETKİLERİ": "https://drive.google.com/drive/folders/1DWX9z3hAo47fUgEZ7xgkoX-VPqM2spFX?usp=sharing",
    "YAPAY ZEKA VE MÜHENDİSLİK UYGULAMALARI": "https://drive.google.com/drive/folders/1UTloU99byFvk08Yr5c_lswOsOsSbUjVx?usp=sharing",
    "GÖMÜLÜ SİSTEMLERİN UYGULAMALARI": "https://drive.google.com/drive/folders/1HdXn4fdcvaTzFyUN3AmjmdUOrtOcg8ph?usp=sharing",
    "BİYOMEDİKAL ENSTRUMANTASYON": "https://drive.google.com/drive/folders/15oFobI19xHbecz1r7WSpmxmZhJXd5mr5?usp=sharing",
    "BİLGİSAYARLI GÖRÜ": "https://drive.google.com/drive/folders/1VC_qek2XqIXSWd-fJbhbXYM656jw3dVC?usp=sharing",
    "ELEKTROMAGNETİK ALANLAR TEORİSİ": "https://drive.google.com/drive/folders/1x-GaSLwniwtXaxyjoTfTxuZtDGrguB_I?usp=sharing",
    "İŞARETLER VE SİSTEMLER": "https://drive.google.com/drive/folders/1-_gCpuCuiLkz8XxanIBFeXppDh41E7TF?usp=sharing",
    "LOJİK LABORATUARI": "https://drive.google.com/drive/folders/1XyUKszXMGa-nqXY1NBbZsxUqIlnWZkza?usp=sharing",
    "ENDÜSTRİYEL ELEKTRONİK": "https://drive.google.com/drive/folders/1l3UdyTlsYu9fKIpMskLn2ksPDCLHKoYe?usp=sharing",
    "AR-GE, İNOVASYON VE TEKNOLOJİ YÖNETİMİ": "https://drive.google.com/drive/folders/1AKDmRV5efKAX4ggJ-LWC5WMFA5gN6xJt?usp=sharing",
    "MİKRODENETLEYİCİLER": "https://drive.google.com/drive/folders/1X9U1HOCk-i_FoUsE2AKW-RrN_D3CF0tC?usp=sharing",
    "BİLİM TEKNOLOJİ VE MÜHENDİSLİK": "https://drive.google.com/drive/folders/1GMambOB8YngdVHnMJG9qWnNNgh8EH9Dm?usp=sharing",
    "RF DEVRELERİNE GİRİŞ": "https://drive.google.com/drive/folders/1ZE5Eb17ll4Ch6sMRMcJhNgvSEAJpHHgv?usp=sharing",
    "MÜHENDİSLİK MATEMATİĞİ I": "https://drive.google.com/drive/folders/177M36a6or3N8he5pjDPGRFYXP5MBeA-u?usp=sharing",
    "ÖLÇME VE ANALİZ LABORATUARI": "https://drive.google.com/drive/folders/11Ihy2_sYlvT4Y8BDl2tanPWM01dB0lVM?usp=sharing",
    "MÜHENDİSLER İÇİN OLASILIK TEORİSİ VE İSTATİSTİK": "https://drive.google.com/drive/folders/1YnjP-6wib9KIja0iNh6lWxGhOsRxoDU8?usp=sharing",
    "ELEKTRONİK DEVRE LABORATUARI I": "https://drive.google.com/drive/folders/1t4gAsYko7uV5n8H9-i1lhTx8HQf5291j?usp=sharing",
    "ELEKTRONİK DEVRELER II": "https://drive.google.com/drive/folders/15X3USaCech9BODPxy7FU65VzgQglcCl8?usp=sharing",
    "ELEKTRONİK DEVRE LABORATUARI II": "https://drive.google.com/drive/folders/1jH9Wyk7oR0_qggifvIDp_RkXGH-3iZ6z?usp=sharing",
    "MİKROİŞLEMCİLER": "https://drive.google.com/drive/folders/13BumMlKtseYsfuuKuuo5UGyapt2dT_ZV?usp=sharing",
    "DİJİTAL ELEKTRONİK": "https://drive.google.com/drive/folders/1BxdL7aM2dyl4RAqSIF02nOZzHWfb0JPP?usp=sharing",
    
    
    
};

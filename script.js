// --- DATA DASAR ---
const rawSections = [
  {
    title: "I. Pembukaan",
    steps: [
      "1. Salam dan perkenalan diri",
      "2. Menanyakan identitas pasien (nama, usia, pekerjaan, alamat)",
    ],
  },
  {
    title: "II. Anamnesis",
    steps: [
      "3. Menanyakan kondisi pasien dengan format OLDCART (Onset, Location, Duration, Characteristic, Aggravating Factors, Relieving Factors, Treatment)",
      "4. Menanyakan RPD (Riwayat Penyakit Dahulu) pasien seperti:\n- Apakah pernah mengalami keluhan serupa sebelumnya?\n- Apakah ada riwayat gangguan pendengaran?\n- Apakah ada riwayat vertigo?\n- Apakah ada riwayat penyakit kronis (diabetes mellitus, hipertensi, stroke)?",
      "5. Menanyakan RPK (Riwayat Penyakit Keluarga) pasien seperti:\n- Apakah keluarga ada yang mengalami keluhan serupa?\n- Apakah keluarga ada yang mengalami gangguan pendengaran?\n- Apakah keluarga ada yang memiliki riwayat vertigo?\n- Apakah ada riwayat penyakit kronis (diabetes mellitus, hipertensi, stroke)?",
      "6. Menanyakan Lifestyle pasien seperti:\n- Apakah sering membersihkan telinga menggunakan cotton bud?\n- Apakah sering terpapar suara keras dari lingkungan sekitar?\n- Apakah sering mendengarkan musik dengan earphone?\n- Apakah kegiatan sehari-hari sering membuat telinga lembab seperti berenang?",
    ],
  },
  {
    title: "III. Informed Consent",
    steps: [
      "7. Melakukan review dengan merangkum hasil anamnesis",
      "8. Menjelaskan prosedur yang akan dilakukan, tujuan prosedur serta risiko yang dapat terjadi",
      "9. Meminta persetujuan pasien",
    ],
  },
  {
    title: "IV. Persiapan Pasien",
    steps: [
      "10. Posisi duduk pasien berhadapan dengan pemeriksa secara oblique, lutut lateral pasien dan pemeriksa saling menempel",
    ],
  },
  {
    title: "V. Persiapan Alat",
    steps: [
      "11. Mempersiapkan otoscope, headlamp, garpu tala (512 Hz), alcuta, dan alcohol swab",
    ],
  },
  {
    title: "VI. Persiapan Diri",
    steps: [
      "12. Meredupkan lampu ruangan",
      "13. Menggunakan headlamp dan mengarahkan arah cahaya menuju bagian telinga",
      "14. Mencuci tangan dengan 6 langkah WHO",
      "15. Memasang dan membersihkan corong otoscope",
      "16. Memastikan posisi pasien dan pemeriksa sudah oblique",
    ],
  },
  {
    title: "VII. Inspeksi Telinga Luar",
    steps: [
      "17. Menginspeksi bagian preaurikula:\n- Area parotis: apakah terdapat pembesaran atau peradangan pada kelenjar parotis\n- Temporomandibular joint: apakah terdapat dislokasi temporomandibular joint\n- Sinus preauricular: apakah terdapat sinus preauricular",
      "18. Menginspeksi bagian aurikula:\n- Apakah terdapat perubahan warna, inflamasi, perbedaan antara telinga kiri dan kanan (simetris), massa, abnormalitas pada bentuk telinga, discharge yang keluar dari telinga, serta bekas luka pada telinga",
      "19. Menginspeksi bagian area mastoid:\n- Apakah terdapat pembengkakan atau massa, bekas luka atau operasi, serta peradangan pada area mastoid",
    ],
  },
  {
    title: "VIII. Palpasi Telinga",
    steps: [
      "20. Melakukan palpasi telinga luar dan sekitarnya:\n- Helix, lobulus, tragus, pinna (apakah nyeri ditekan)\n- Regio parotis (apakah ada pembengkakan)\n- Temporomandibular joint (apakah ada krepitasi)\n- Tulang mastoid dan mastoid tip (apakah ada inflamasi)",
    ],
  },
  {
    title: "IX. Inspeksi Telinga Dalam",
    steps: [
      "21. Pegang otoscope menggunakan tangan yang sama dengan sisi telinga yang diperiksa",
      "22. Pegang otoscope seperti memegang pensil dan jari kelingking memfiksasi di pipi pasien",
      "23. Tarik pinna/daun telinga pasien ke arah posterosuperior dengan tangan yang tidak memegang otoscope",
      "24. Masukkan otoscope secara perlahan dan tidak terlalu dalam ke Canalis Acusticus Externus",
      "25. Amati apakah pada Canalis Acusticus Externus terdapat peradangan, jumlah dan konsistensi serumen, serta benda asing atau discharge",
      "26. Amati apakah membran timpani masih intak/utuh atau terdapat perforasi serta terdapat inflamasi",
      "27. Amati apakah cone of light di area anteroinferior (biasanya telinga kiri di arah jam 7 dan telinga kanan di arah jam 5)",
    ],
  },
  {
    title: "X. Tes Rinne",
    steps: [
      "28. Pegang garpu tala 512 Hz pada bagian pangkal (column handle)",
      "29. Getarkan garpu tala dengan cara menjentikannya atau membenturkannya ke siku atau lutut pemeriksa",
      "30. Tempelkan bagian ujung pangkal garpu tala yang sudah bergetar pada processus mastoideus pasien",
      "31. Instruksi kepada pasien untuk memberi tanda apabila sudah tidak merasakan getaran garpu tala",
      "32. Jika pasien sudah tidak mendengar dengungan, segera pindahkan garpu tala ke depan meatus acusticus externus pasien",
      "33. Tanyakan kembali kepada pasien apakah suara dengungan masih terdengar",
      "34. Ulangi prosedur yang sama pada sisi telinga lainnya",
    ],
  },
  {
    title: "XI. Tes Weber",
    steps: [
      "35. Pegang garpu tala 512 Hz pada bagian pangkal (column handle)",
      "36. Getarkan garpu tala dengan cara menjentikannya atau membenturkannya ke siku atau lutut pemeriksa",
      "37. Tempelkan bagian ujung pangkal garpu tala yang sudah bergetar pada dahi (glabella), puncak kepala (vertex), dagu, gigi seri tengah ataupun tulang hidung",
      "38. Minta pasien menyebutkan dimana ia lebih jelas mendengar suara (kanan, kiri, atau sama jelas)",
    ],
  },
  {
    title: "XII. Tes Schwabach",
    steps: [
      "39. Pegang garpu tala 512 Hz pada bagian pangkal (column handle)",
      "40. Getarkan garpu tala dengan cara menjentikannya atau membenturkannya ke siku atau lutut pemeriksa",
      "41. Tempelkan bagian ujung pangkal garpu tala yang sudah bergetar pada processus mastoideus pasien",
      "42. Instruksi kepada pasien untuk memberi tanda apabila sudah tidak merasakan getaran garpu tala",
      "43. Jika pasien sudah tidak mendengar dengungan, segera pindahkan garpu tala ke processus mastoideus pemeriksa (pada sisi telinga yang sama)",
      "44. Ulangi prosedur dengan menempatkan garpu tala pada processus mastoideus pemeriksa terlebih dahulu sampai tidak terdengar suara, lalu tempatkan pada processus mastoideus pasien",
      "45. Lakukan pada telinga kanan dan kiri, sehingga total dilakukan empat kali pemeriksaan",
    ],
  },
  {
    title: "XIII. Pelaporan Hasil",
    steps: [
      "46. Pasien dipersilakan kembali ke meja pemeriksaan",
      "47. Matikan headlamp dan menyalakan kembali lampu ruangan",
      "48. Mencuci tangan dengan 6 langkah WHO",
      "49. Menyampaikan rangkuman hasil pemeriksaan meliputi diagnosis kerja dan diagnosis banding",
      "50. Meminta pasien untuk melakukan pemeriksaan penunjang yang dibutuhkan",
      "51. Merujuk ke spesialis THT apabila melebihi kompetensi dokter umum",
    ],
  },
  {
    title: "XIV. Edukasi",
    steps: [
      "52. Menerapkan CERDIK (Cek kesehatan rutin, Enyahkan rokok, Rajin olahraga, Diet seimbang, Istirahat cukup, Kelola stres)",
      "53. Jangan membersihkan telinga terlalu dalam dengan cotton bud",
      "54. Jangan terlalu sering mendengarkan musik dengan earphone",
    ],
  },
];

const soalKuis = [
  {
    q: "Posisi pasien dan pemeriksa yang benar saat pemeriksaan telinga adalah …",
    o: [
      "Berdiri saling berhadapan",
      "Duduk saling membelakangi",
      "Duduk berhadapan secara oblique",
      "Pasien tidur terlentang",
      "Pemeriksa berdiri di belakang pasien",
    ],
    a: 2,
  },
  {
    q: "Garpu tala yang digunakan pada pemeriksaan pendengaran adalah …",
    o: ["128 Hz", "256 Hz", "512 Hz", "1024 Hz", "2048 Hz"],
    a: 2,
  },
  {
    q: "Saat melakukan otoskopi pada orang dewasa, daun telinga ditarik ke arah …",
    o: [
      "Anteroinferior",
      "Posteroinferior",
      "Lateral",
      "Posterosuperior",
      "Medial",
    ],
    a: 3,
  },
  {
    q: "Pada pemeriksaan membran timpani normal, cone of light telinga kanan tampak pada arah …",
    o: ["Jam 1", "Jam 3", "Jam 5", "Jam 7", "Jam 9"],
    a: 2,
  },
  {
    q: "Tes Rinne positif menunjukkan bahwa …",
    o: [
      "BC lebih baik daripada AC",
      "AC lebih baik daripada BC",
      "Tidak ada hantaran suara",
      "Terdapat lateralisasi",
      "Pasien pasti tuli konduktif",
    ],
    a: 1,
  },
  {
    q: "Pada tes Weber, suara terdengar lebih jelas pada telinga yang sakit. Interpretasi yang tepat adalah …",
    o: [
      "Pendengaran normal",
      "Tuli sensorineural",
      "Tuli konduktif",
      "Otitis eksterna",
      "Vertigo perifer",
    ],
    a: 2,
  },
  {
    q: "Pemeriksaan Schwabach memendek menandakan bahwa pasien kemungkinan mengalami …",
    o: [
      "Pendengaran normal",
      "Tuli konduktif",
      "Tuli sensorineural",
      "Perforasi membran timpani",
      "Otitis media akut",
    ],
    a: 2,
  },
  {
    q: "Keluhan khas yang paling sering ditemukan pada Otitis Eksterna adalah …",
    o: [
      "Nyeri tekan tragus dan nyeri tarik pinna",
      "Keluar darah segar tanpa nyeri",
      "Penurunan kesadaran mendadak",
      "Kejang disertai gangguan pendengaran",
      "Nyeri tenggorokan tanpa keluhan telinga",
    ],
    a: 0,
  },
  {
    q: "Pemeriksaan penunjang untuk mengukur ambang batas pendengaran pasien adalah …",
    o: [
      "CT-Scan kepala",
      "Audiometri nada murni",
      "EEG",
      "Spirometri",
      "Elektrokardiografi",
    ],
    a: 1,
  },
  {
    q: "Resep antibiotik oral lini pertama pada Otitis Media Akut adalah …",
    o: [
      "Paracetamol 500 mg",
      "Amoksisilin 500 mg",
      "Ofloxacin 3% ear drop",
      "HCl Ephredrine 1% nasal drop",
      "Hydrogen peroxide 3%",
    ],
    a: 1,
  },
];

const flexKeywords = [
  "Pegang garpu tala",
  "Getarkan garpu tala",
  "processus mastoideus pasien",
  "Mencuci tangan",
];

// --- FUNGSI FLOWCHART ---
function formatStep(text) {
  let clean = text.replace(/^\d+\.\s*/, "").trim();
  return clean.replace(/\n-/g, "<br>• ").replace(/-/g, "• ");
}

function init() {
  const bank = document.getElementById("bank");
  const container = document.getElementById("flowchart-container");
  let allSteps = [];
  rawSections.forEach((section) => {
    const secDiv = document.createElement("div");
    secDiv.className = "flowchart-section";
    secDiv.innerHTML = `<h2>${section.title}</h2>`;
    section.steps.forEach((step, idx) => {
      const formatted = formatStep(step);
      allSteps.push({ original: step, formatted: formatted });
      const drop = document.createElement("div");
      drop.className = "dropzone";
      drop.innerHTML = "Tarik langkah ke sini...";
      drop.dataset.original = step;
      drop.dataset.formatted = formatted;
      secDiv.appendChild(drop);
      if (idx < section.steps.length - 1)
        secDiv.innerHTML += `<div class="arrow" style="text-align:center; color:#cbd5e1; margin:-10px 0 5px 0;"><i class="fas fa-chevron-down"></i></div>`;
    });
    container.appendChild(secDiv);
  });

  allSteps
    .sort(() => Math.random() - 0.5)
    .forEach((item) => {
      const drag = document.createElement("div");
      drag.className = "drag-item";
      drag.draggable = true;
      drag.innerHTML = item.formatted;
      drag.dataset.original = item.original;
      drag.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("original", item.original);
        e.dataTransfer.setData("formatted", item.formatted);
      });
      bank.appendChild(drag);
    });
  tampilLB();
}

document.addEventListener("dragover", (e) => e.preventDefault());
document.addEventListener("drop", (e) => {
  if (
    e.target.classList.contains("dropzone") &&
    !e.target.classList.contains("correct")
  ) {
    const dragOrig = e.dataTransfer.getData("original");
    const dragForm = e.dataTransfer.getData("formatted");
    const targetOrig = e.target.dataset.original;
    const isFlex = flexKeywords.some((k) => dragForm.includes(k));
    let isCorrect = isFlex
      ? dragForm === e.target.dataset.formatted
      : dragOrig === targetOrig;
    if (isCorrect) {
      e.target.innerHTML = dragForm;
      e.target.classList.add("correct");
      document.querySelectorAll(".drag-item").forEach((it) => {
        if (it.dataset.original === dragOrig) it.style.display = "none";
      });
      updateProgress();
    } else {
      e.target.classList.add("wrong");
      setTimeout(() => e.target.classList.remove("wrong"), 500);
    }
  }
});

function updateProgress() {
  const total = document.querySelectorAll(".dropzone").length;
  const correct = document.querySelectorAll(".dropzone.correct").length;
  const percent = Math.floor((correct / total) * 100);
  document.getElementById("prog-fill").style.width = percent + "%";
  document.getElementById("prog-text").innerText = percent + "%";
}

// --- FUNGSI KUIS & LEADERBOARD ---
let curQ = 0;
let skorSesi = 0;
let namaUser = "";
let sesiAktif = "";

function bukaFitur(fitur) {
  document.getElementById("section-flowchart").style.display =
    fitur === "flowchart" ? "block" : "none";
  document.getElementById("section-quiz").style.display =
    fitur === "quiz" ? "block" : "none";
  document
    .getElementById("nav-f")
    .classList.toggle("active", fitur === "flowchart");
  document.getElementById("nav-q").classList.toggle("active", fitur === "quiz");
  if (fitur === "quiz") tampilLB();
}

function pilihSesi(sesi) {
  namaUser = document.getElementById("nama-mhs").value.trim();
  if (!namaUser)
    return alert("Silakan masukkan nama lengkap Anda terlebih dahulu!");
  sesiAktif = sesi;
  curQ = 0;
  skorSesi = 0;
  document.getElementById("quiz-start").style.display = "none";
  document.getElementById("quiz-run").style.display = "block";
  document.getElementById("session-title-label").innerText =
    sesi === "pre" ? "SESI: PRE-TEST" : "SESI: POST-TEST";
  tampilSoal();
}

function tampilSoal() {
  const s = soalKuis[curQ];
  document.getElementById("current-idx").innerText = curQ + 1;
  document.getElementById("q-text").innerText = s.q;
  document.getElementById("quiz-progress-fill").style.width =
    ((curQ + 1) / soalKuis.length) * 100 + "%";
  const optDiv = document.getElementById("q-options");
  optDiv.innerHTML = "";
  s.o.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "opt-q";
    btn.innerText = opt;
    btn.onclick = () => {
      if (i === s.a) skorSesi += 10;
      curQ++;
      if (curQ < soalKuis.length) tampilSoal();
      else finishQuiz();
    };
    optDiv.appendChild(btn);
  });
}

function finishQuiz() {
  document.getElementById("quiz-run").style.display = "none";
  document.getElementById("quiz-finish").style.display = "block";
  document.getElementById("skor-sesi-val").innerText = skorSesi;

  let db = JSON.parse(localStorage.getItem("aro_students") || "{}");
  if (!db[namaUser]) db[namaUser] = { pre: 0, post: 0, total: 0 };

  if (sesiAktif === "pre") db[namaUser].pre = skorSesi;
  else db[namaUser].post = skorSesi;

  db[namaUser].total = db[namaUser].pre + db[namaUser].post;
  localStorage.setItem("aro_students", JSON.stringify(db));

  document.getElementById("msg-total-status").innerHTML =
    `Total Akumulasi: <strong>${db[namaUser].total} pts</strong><br><small>(Pre: ${db[namaUser].pre} | Post: ${db[namaUser].post})</small>`;
  tampilLB();
}

function tampilLB() {
  let db = JSON.parse(localStorage.getItem("aro_students") || "{}");
  let arr = Object.keys(db).map((name) => ({
    nama: name,
    total: db[name].total,
  }));
  arr.sort((a, b) => b.total - a.total);
  document.getElementById("lb-list").innerHTML =
    arr
      .slice(0, 10)
      .map(
        (i, idx) => `
        <div class="lb-item-modern">
            <span>${idx + 1}. ${i.nama}</span>
            <b>${i.total} pts</b>
        </div>
    `,
      )
      .join("") ||
    "<p style='font-size:11px; color:gray; text-align:center;'>Belum ada data nilai.</p>";
}

function resetUI() {
  document.getElementById("quiz-finish").style.display = "none";
  document.getElementById("quiz-start").style.display = "block";
}

window.onload = init;

/* --- DATABASE DENGAN PEMISAHAN FISIK & PENUNJANG --- */
const databasePenyakit = [
  {
    nama: "Otitis Eksterna",
    keluhan:
      "Rasa sakit pada telinga (otalgia), rasa penuh, pendengaran berkurang, telinga terasa basah, demam.",
    banding: ["Perikondritis", "Otomikosis", "Otitis media akut"],
    fisik: [
      "Nyeri tekan tragus (+)",
      "Nyeri tarik pinna (+)",
      "CAE sempit, hiperemis, edema",
    ],
    penunjang: [
      "Otoscopy: Sekret minimal",
      "Garpu Tala: Normal/Tuli Konduktif",
    ],
    treatment: [
      "R/solutio Hydrogen peroxide 3%",
      "Salep antibiotik Polymixin-B",
      "Analgesik oral",
    ],
    edukasi: [
      "Tidak mengorek telinga",
      "Dilarang berenang",
      "Telinga harus tetap kering",
    ],
  },
  {
    nama: "Otitis Media Akut",
    keluhan:
      "Nyeri telinga hebat, demam tinggi, riwayat ISPA, telinga terasa penuh, atau keluar cairan.",
    banding: ["Otitis media serosa akut", "Otitis eksterna"],
    fisik: [
      "MT Bulging & Hiperemis",
      "MT Perforasi",
      "Sekret purulen di liang telinga",
    ],
    penunjang: [
      "Tes Rinne Negatif",
      "Weber lateralisasi ke telinga sakit",
      "Audiometri",
    ],
    treatment: [
      "R/tab Amoksisilin 500 mg",
      "R/nasal drop HCl Ephredrine 1%",
      "R/ear drop Ofloxacin 3%",
    ],
    edukasi: ["Habiskan antibiotik", "Jangan kemasukan air", "Kontrol rutin"],
  },
  {
    nama: "OMSK",
    keluhan:
      "Keluar cairan telinga > 2 bulan, bau, pendengaran berkurang, riwayat korek telinga.",
    banding: ["Otitis eksterna", "Kolesteatoma"],
    fisik: [
      "Perforasi MT sentral",
      "Perforasi atik/marginal",
      "Sekret mukoid/berbau",
    ],
    penunjang: ["X-Ray Mastoid", "Tes Schwabach Memanjang", "Kultur sekret"],
    treatment: [
      "R/ear drop Ofloxacin 0,3%",
      "Cuci telinga H2O2 3%",
      "Antibiotik oral",
    ],
    edukasi: [
      "Telinga tidak boleh kena air",
      "Hindari mengorek telinga",
      "Evaluasi risiko komplikasi",
    ],
  },
  {
    nama: "Benda Asing",
    keluhan:
      "Telinga tersumbat mendadak, riwayat kemasukan benda/serangga, nyeri, bau.",
    banding: ["Serumen prop", "Otitis eksterna"],
    fisik: [
      "Tampak benda asing di MAE",
      "MAE Edema",
      "Luka lecet pada dinding CAE",
    ],
    penunjang: ["Otoscopy headlamp", "Ekstraksi percobaan"],
    treatment: [
      "Ekstraksi benda asing",
      "Tetes telinga antibiotik",
      "Analgesik",
    ],
    edukasi: ["Jangan keluarkan sendiri", "Jauhkan benda kecil dari anak"],
  },
  {
    nama: "Serumen Prop",
    keluhan:
      "Telinga buntu setelah mandi, pendengaran turun, rasa penuh, gatal.",
    banding: ["Benda asing", "Otitis eksterna"],
    fisik: ["Massa kuning kecoklatan/hitam di MAE", "MT tertutup massa"],
    penunjang: ["Garpu tala: Tuli konduktif", "Tes bisik"],
    treatment: ["Tetes Karbogliserin 10%", "Irigasi telinga", "H2O2 3%"],
    edukasi: ["Hindari cotton bud", "Gunakan pelunak serumen berkala"],
  },
];

let faseDiag = 1;
let kasusAktif = null;

function generateKasus() {
  kasusAktif =
    databasePenyakit[Math.floor(Math.random() * databasePenyakit.length)];
  faseDiag = 1; // Fase 1: Diagnosis Kerja
  document.getElementById("fc-text-content").innerHTML = `
        <div style="padding-bottom:10px; border-bottom:2px solid #f1f5f9; margin-bottom:15px;">
            <h3 style="color:#c1082e; font-family:'Cinzel', serif;">ANAMNESIS</h3>
            <p style="font-size:15px; line-height:1.6; color:#334155;">"${kasusAktif.keluhan}"</p>
        </div>
        <div id="case-history"></div>
    `;
  updateInterface();
}

function updateInterface() {
  // Update Stepper (Step 1 Keluhan selalu aktif, sisanya ikut fase)
  for (let i = 1; i <= 6; i++) {
    document.getElementById("sd-" + (i + 1)).className =
      i === faseDiag ? "step-diag active" : "step-diag";
  }

  let pool = document.getElementById("diag-options-pool");
  pool.innerHTML = "";
  document.getElementById("diag-answer-list").innerHTML = "";

  let items = [];
  if (faseDiag === 1) items = databasePenyakit.map((p) => p.nama);
  else if (faseDiag === 2)
    items = [...kasusAktif.banding, "Mastoiditis", "Sinusitis"];
  else if (faseDiag === 3)
    items = [...kasusAktif.fisik, "Nyeri tekan perut", "Sklera Ikterik"];
  else if (faseDiag === 4)
    items = [...kasusAktif.penunjang, "Rontgen Thorax", "EKG"];
  else if (faseDiag === 5)
    items = [...kasusAktif.treatment, "Apendektomi", "Oksigenasi"];
  else if (faseDiag === 6)
    items = [...kasusAktif.edukasi, "Boleh berenang sepuasnya"];

  items
    .sort(() => Math.random() - 0.5)
    .forEach((txt) => {
      let d = document.createElement("div");
      d.className = "diag-opt";
      d.innerText = txt;
      d.draggable = true;
      d.ondragstart = (e) => e.dataTransfer.setData("text", txt);
      pool.appendChild(d);
    });
}

const dropZone = document.getElementById("diag-drop-zone");
dropZone.ondragover = (e) => {
  e.preventDefault();
  dropZone.style.background = "#fff1f2";
};
dropZone.ondragleave = () => {
  dropZone.style.background = "#f8fafc";
};

dropZone.ondrop = (e) => {
  dropZone.style.background = "#f8fafc";
  let val = e.dataTransfer.getData("text");
  let isCorrect = false;

  if (faseDiag === 1 && val === kasusAktif.nama) isCorrect = true;
  else if (faseDiag === 2 && kasusAktif.banding.includes(val)) isCorrect = true;
  else if (faseDiag === 3 && kasusAktif.fisik.includes(val)) isCorrect = true;
  else if (faseDiag === 4 && kasusAktif.penunjang.includes(val))
    isCorrect = true;
  else if (faseDiag === 5 && kasusAktif.treatment.includes(val))
    isCorrect = true;
  else if (faseDiag === 6 && kasusAktif.edukasi.includes(val)) isCorrect = true;

  if (isCorrect) {
    let existing = Array.from(
      document.getElementById("diag-answer-list").children,
    ).map((c) => c.innerText.replace("✓ ", ""));
    if (!existing.includes(val)) {
      let tag = document.createElement("div");
      tag.className = "diag-ans-tag";
      tag.innerText = "✓ " + val;
      document.getElementById("diag-answer-list").appendChild(tag);

      let label = [
        "",
        "DX KERJA",
        "DX BANDING",
        "PEMERIKSAAN FISIK",
        "PEMERIKSAAN PENUNJANG",
        "TREATMENT",
        "EDUKASI",
      ][faseDiag];
      document.getElementById("case-history").innerHTML += `
                <div style="margin-top:10px; border-left: 3px solid #c1082e; padding-left:10px;">
                    <small style="color:#c1082e; font-weight:800; font-size:9px;">${label}</small><br>
                    <span style="font-size:13px; font-weight:600;">${val}</span>
                </div>
            `;
      checkCompletion();
    }
  } else {
    alert("Pilihan tidak tepat untuk tahap ini.");
  }
};

function checkCompletion() {
  let current = document.getElementById("diag-answer-list").children.length;
  let targets = [
    0,
    1,
    kasusAktif.banding.length,
    kasusAktif.fisik.length,
    kasusAktif.penunjang.length,
    kasusAktif.treatment.length,
    kasusAktif.edukasi.length,
  ];

  if (current === targets[faseDiag]) {
    if (faseDiag < 6) {
      faseDiag++;
      setTimeout(() => {
        updateInterface();
      }, 400);
    } else {
      alert(
        "Selesai! Anda telah menyelesaikan manajemen kasus THT secara lengkap.",
      );
    }
  }
}

function bukaFitur(fitur) {
  // Sembunyikan semua section
  document.getElementById("section-flowchart").style.display = "none";
  document.getElementById("section-quiz").style.display = "none";
  document.getElementById("section-diagnosis").style.display = "none";

  // Tampilkan section yang dipilih
  document.getElementById("section-" + fitur).style.display = "block";

  // Update kelas active di sidebar (opsional)
  document
    .querySelectorAll(".nav-item")
    .forEach((el) => el.classList.remove("active"));
  document.getElementById("nav-" + fitur.charAt(0)).classList.add("active");
}

// --- DATABASE SKENARIO (Sesuai draf Anda) ---
const scenarios = [
  {
    name: "Tn. Andi",
    complaint: "Telinga kanan saya nyeri sekali dok kalau disentuh.",
    dx: "Otitis Eksterna (Edema liang telinga)",
    model: "normal_ear",
  },
  {
    name: "Ny. Sari",
    complaint: "Telinga kiri terasa tersumbat dan pendengaran berkurang.",
    dx: "Serumen Prop (Kotoran menyumbat)",
    model: "cerumen_ear",
  },
  {
    name: "An. Budi",
    complaint: "Telinga anak saya keluar cairan kuning sejak kemarin.",
    dx: "OMA (Perforasi Membran Timpani)",
    model: "perforated_ear",
  },
];

let recognition;
let synth = window.speechSynthesis;

// --- INISIALISASI SPEECH RECOGNITION (Mendengar) ---
if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  recognition = new SpeechRecognition();
  recognition.lang = "id-ID";
  recognition.continuous = false;
  recognition.interimResults = false;

  recognition.onresult = (event) => {
    const userText = event.results[0][0].transcript;
    addChatMessage("Dokter", userText);
    processPatientResponse(userText);
  };

  recognition.onerror = (event) => {
    console.error("Speech Recognition Error: ", event.error);
  };
}

// --- FUNGSI BICARA (Membalas Suara) ---
function speak(text) {
  // Batalkan suara yang sedang berjalan agar tidak tumpang tindih
  synth.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "id-ID";
  utter.pitch = 1;
  utter.rate = 1.1; // Sedikit lebih cepat agar natural
  synth.speak(utter);
}

// --- MULAI SIMULASI ---
function initAI() {
  const idx = document.getElementById("scenario-select").value;
  const scene = scenarios[idx];

  const introText = `Halo Dokter, nama saya ${scene.name}. ${scene.complaint}`;
  document.getElementById("chat-box").innerHTML = ""; // Reset chat

  addChatMessage("Pasien", introText);
  speak(introText);

  const micBtn = document.getElementById("mic-btn");
  micBtn.disabled = false;
  micBtn.className = "btn-main"; // Ubah warna jadi aktif
  micBtn.innerHTML = '<i class="fas fa-microphone"></i> Tahan untuk Bicara';
}

function addChatMessage(role, text) {
  const box = document.getElementById("chat-box");
  box.innerHTML += `<p><strong>${role}:</strong> ${text}</p>`;
  box.scrollTop = box.scrollHeight;
}

// --- LOGIKA RESPON PASIEN ---
function processPatientResponse(input) {
  const text = input.toLowerCase();
  let response = "";

  // Logika keyword sederhana
  if (
    text.includes("sejak kapan") ||
    text.includes("berapa lama") ||
    text.includes("kapan")
  ) {
    response = "Sudah terasa sejak 3 hari yang lalu dokter.";
  } else if (
    text.includes("periksa") ||
    text.includes("lihat") ||
    text.includes("teropong")
  ) {
    response = "Silakan dokter, pelan-pelan ya karena agak nyeri.";
    show3DModel();
  } else if (text.includes("sakit") || text.includes("nyeri")) {
    response = "Iya Dok, rasanya nyut-nyutan terus.";
  } else {
    response = "Saya kurang mengerti maksud Dokter, bisa diulangi?";
  }

  setTimeout(() => {
    addChatMessage("Pasien", response);
    speak(response);
  }, 600);
}

// --- TAMPILAN VISUAL 3D/OTOSKOPI ---
function show3DModel() {
  const idx = document.getElementById("scenario-select").value;
  const scene = scenarios[idx];
  const canvas = document.getElementById("canvas-3d");

  canvas.innerHTML = `
    <div class='view-3d-active'>
        <img src="https://via.placeholder.com/400x250/000000/FFFFFF?text=Otoskopi+View:+${scene.model}" style="width:100%; border-radius:5px;">
        <p style="color:#ff4d4d; font-weight:bold; margin-top:10px;">TEMUAN: ${scene.dx}</p>
    </div>`;

  document.getElementById("dx-info").classList.remove("hidden");
  document.getElementById("finding-text").innerText = scene.dx;
}

// --- KONTROL TOMBOL MIC (Merekam) ---
const micBtn = document.getElementById("mic-btn");
if (micBtn) {
  // Untuk Desktop
  micBtn.onmousedown = () => {
    if (recognition) {
      recognition.start();
      micBtn.style.background = "#ff4d4d"; // Beri feedback warna saat ditekan
      micBtn.innerHTML = '<i class="fas fa-microphone"></i> Mendengarkan...';
    }
  };

  micBtn.onmouseup = () => {
    if (recognition) {
      recognition.stop();
      micBtn.style.background = ""; // Balik ke warna semula
      micBtn.innerHTML = '<i class="fas fa-microphone"></i> Tahan untuk Bicara';
    }
  };

  // Untuk Mobile/Touch
  micBtn.ontouchstart = (e) => {
    e.preventDefault();
    if (recognition) recognition.start();
    micBtn.style.background = "#ff4d4d";
  };

  micBtn.ontouchend = () => {
    if (recognition) recognition.stop();
    micBtn.style.background = "";
  };
}

let timerInterval;
let totalTime = 600; // 10 menit dalam detik

function startTimer() {
  // Reset timer jika sebelumnya sudah berjalan
  clearInterval(timerInterval);
  let timeLeft = totalTime;

  const timerDisplay = document.getElementById("ai-timer");
  const timerFill = document.getElementById("ai-timer-fill");

  // Reset visual
  timerDisplay.parentElement.classList.remove("timer-urgent");
  timerFill.style.width = "100%";

  timerInterval = setInterval(() => {
    timeLeft--;

    // Hitung menit dan detik
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    // Format display agar selalu 00:00
    timerDisplay.innerText = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

    // Update progress bar
    let percent = (timeLeft / totalTime) * 100;
    timerFill.style.width = percent + "%";

    // Warning jika sisa 1 menit
    if (timeLeft <= 60) {
      timerDisplay.parentElement.classList.add("timer-urgent");
    }

    // Jika waktu habis
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      speak("Waktu simulasi Anda telah habis, Dokter.");
      alert("Waktu Habis! Silakan selesaikan diagnosis Anda.");
      document.getElementById("mic-btn").disabled = true;
    }
  }, 1000);
}

// UPDATE FUNGSI initAI Anda:
// Panggil startTimer() di dalam fungsi initAI() yang sudah ada
const originalInitAI = initAI;
initAI = function () {
  originalInitAI(); // Jalankan fungsi initAI lama
  startTimer(); // Tambahkan jalankan timer
};

/* ─────────────────────────────────────────────────────────────
   i18n — dua bahasa (English / Bahasa Indonesia)
   Berkas ini dibuat otomatis dari teks asli halaman, lalu disimpan
   sebagai aset statis. Kunci kamus adalah teks Inggris yang sudah
   dinormalisasi spasinya, sehingga tidak ada risiko salah ketik.

   Cara kerja:
   - Setiap simpul teks dicocokkan persis dengan kamus.
   - Teks asli disimpan di WeakMap, jadi kembali ke Inggris selalu
     memulihkan kalimat aslinya, bukan hasil terjemahan balik.
   - Simpul teks yang tidak ada di kamus dibiarkan apa adanya —
     nama orang, angka, nama teknologi, dan tanggal tidak disentuh.
   - Tidak ada dependensi. Tanpa JavaScript, halaman tetap
     berbahasa Inggris seperti aslinya.
   ───────────────────────────────────────────────────────────── */
(function () {
  'use strict';

  var DATA = {
  "id": {
    "Skip to content": "Langsung ke konten",
    "About": "Tentang",
    "Experience": "Pengalaman",
    "Projects": "Proyek",
    "Skills": "Keahlian",
    "Journal": "Jurnal",
    "Contact": "Kontak",
    "Kota Malang, East Java, Indonesia": "Kota Malang, Jawa Timur, Indonesia",
    "Portfolio / Personal Website": "Portofolio / Situs Pribadi",
    "Hello, I’m": "Halo, saya",
    "Informatics engineering. I build web applications end to end — Laravel, Django and JavaScript on the back, React on the front — and I enjoy picking up new things and contributing to projects that are actually challenging.": "Teknik informatika. Saya membangun aplikasi web dari ujung ke ujung — Laravel, Django, dan JavaScript di sisi backend, React di sisi frontend — dan saya senang mempelajari hal baru serta berkontribusi pada proyek yang benar-benar menantang.",
    "Let’s Connect": "Mari Terhubung",
    "Open to software engineering & full-stack roles": "Terbuka untuk peran software engineering & full-stack",
    "ship something real": "membuat sesuatu yang nyata",
    "My full name is Fransiscus Farrel Edric Wijanarko — Farrel, in short. I’m based in Kota Malang, East Java, and I study Informatics Engineering at Politeknik Negeri Malang.": "Nama lengkap saya Fransiscus Farrel Edric Wijanarko — biasa dipanggil Farrel. Saya berdomisili di Kota Malang, Jawa Timur, dan menempuh studi Teknik Informatika di Politeknik Negeri Malang.",
    "Across two internships I’ve worked on both sides of the stack: Laravel and Django backends with PostgreSQL and MySQL, REST APIs on Node.js and Express, and responsive interfaces in React and Bootstrap. I’ve built systems that calculate Direct Labor Efficiency, digitised scrap-data entry on a production floor, and automated CV screening with AI workflows.": "Selama dua magang, saya bekerja di kedua sisi stack: backend Laravel dan Django dengan PostgreSQL serta MySQL, REST API di Node.js dan Express, serta antarmuka responsif dengan React dan Bootstrap. Saya pernah membangun sistem perhitungan Direct Labor Efficiency, mendigitalkan input data scrap di lantai produksi, dan mengotomatiskan seleksi CV dengan alur kerja AI.",
    "What I care about is software that holds up — readable, maintainable, and actually useful to the people running it.": "Yang saya pedulikan adalah perangkat lunak yang tahan lama — mudah dibaca, mudah dipelihara, dan benar-benar berguna bagi orang yang menjalankannya.",
    "Location": "Lokasi",
    "Most recent role": "Peran terbaru",
    "Focus": "Fokus",
    "Full-stack web · backend & REST APIs · workflow automation": "Web full-stack · backend & REST API · otomasi alur kerja",
    "Education": "Pendidikan",
    "Informatics Engineering, Politeknik Negeri Malang (2022–2026)": "Teknik Informatika, Politeknik Negeri Malang (2022–2026)",
    "Where I’ve worked": "Tempat saya bekerja",
    "2026-present": "2026–sekarang",
    "Internship": "Magang",
    "Worked on IT and operations administration alongside a carbon-emission monitoring project for the aviation side of the business.": "Menangani administrasi TI dan operasional bersamaan dengan proyek pemantauan emisi karbon untuk sisi penerbangan bisnis.",
    "Built the ACE (AirNav Carbon Emission) monitoring application — emission records, spreadsheet import/export and reporting on Laravel 12 with PostgreSQL.": "Membangun aplikasi pemantauan ACE (AirNav Carbon Emission) — pencatatan emisi, impor/ekspor spreadsheet, dan pelaporan dengan Laravel 12 serta PostgreSQL.",
    "Jul 2025 — Nov 2025 · 5 months": "Jul 2025 — Nov 2025 · 5 bulan",
    "Contributed to frontend and backend work on internal and client-facing applications, designing, developing and deploying web solutions with cross-functional teams.": "Berkontribusi pada pekerjaan frontend dan backend untuk aplikasi internal dan aplikasi klien, merancang, mengembangkan, serta menerapkan solusi web bersama tim lintas fungsi.",
    "Built and maintained responsive interfaces with React.js and Tailwind CSS.": "Membangun dan memelihara antarmuka responsif dengan React.js dan Tailwind CSS.",
    "Developed and integrated RESTful APIs using Node.js and Express.": "Mengembangkan dan mengintegrasikan RESTful API menggunakan Node.js dan Express.",
    "Managed MySQL/PostgreSQL databases with secure data handling.": "Mengelola basis data MySQL/PostgreSQL dengan penanganan data yang aman.",
    "Worked in an Agile process — sprint planning, daily standups, code reviews.": "Bekerja dalam proses Agile — perencanaan sprint, daily standup, dan code review.",
    "Resolved bugs and optimised application performance across multiple projects.": "Menyelesaikan bug dan mengoptimalkan performa aplikasi di berbagai proyek.",
    "Implemented a sentiment-analysis feature and automated chatbot integration with n8n workflows.": "Menerapkan fitur analisis sentimen dan integrasi chatbot otomatis dengan alur kerja n8n.",
    "Yazaki Group · Internship": "Yazaki Group · Magang",
    "Jan 2025 — Jun 2025 · 6 months": "Jan 2025 — Jun 2025 · 6 bulan",
    "Built production-department tooling for a manufacturing environment — from backend systems to the interfaces the floor staff uses.": "Membangun perkakas departemen produksi untuk lingkungan manufaktur — dari sistem backend hingga antarmuka yang dipakai staf lantai produksi.",
    "Developed a web system to calculate Direct Labor Efficiency with Laravel (backend) and Bootstrap (frontend).": "Mengembangkan sistem web untuk menghitung Direct Labor Efficiency dengan Laravel (backend) dan Bootstrap (frontend).",
    "Built a scrap-data entry application for the production department using Python Django and PostgreSQL.": "Membangun aplikasi input data scrap untuk departemen produksi menggunakan Python Django dan PostgreSQL.",
    "Fixed and optimised DataTable bugs in existing internal web applications.": "Memperbaiki dan mengoptimalkan bug DataTable pada aplikasi web internal yang sudah ada.",
    "Developed an employee mood-analysis form system in Django to support internal HR insights.": "Mengembangkan sistem formulir analisis mood karyawan dengan Django untuk mendukung wawasan HR internal.",
    "IT Support Technician": "Teknisi Dukungan TI",
    "Jan 2021 — Apr 2021 · 4 months": "Jan 2021 — Apr 2021 · 4 bulan",
    "Selected work": "Karya pilihan",
    "Things I’ve designed, built and shipped — mostly web applications with a real user on the other end of them.": "Hal-hal yang saya rancang, bangun, dan luncurkan — sebagian besar aplikasi web dengan pengguna nyata di baliknya.",
    "n8n workflow · Careers site · Screening form": "Alur kerja n8n · Situs karier · Formulir seleksi",
    "An end-to-end CV screening pipeline that scores applicants automatically. I integrated n8n with Laravel, MySQL, Google Drive/Sheets and the Google Gemini API, and designed a weighted rubric across five criteria — education, experience, technical skills, qualifications and job fit — with bias-mitigation prompting and deterministic score aggregation.": "Pipeline seleksi CV end-to-end yang memberi skor pelamar secara otomatis. Saya mengintegrasikan n8n dengan Laravel, MySQL, Google Drive/Sheets, dan Google Gemini API, serta merancang rubrik berbobot untuk lima kriteria — pendidikan, pengalaman, keterampilan teknis, kualifikasi, dan kesesuaian dengan pekerjaan — dengan prompt mitigasi bias dan agregasi skor deterministik.",
    "Role": "Peran",
    "Workflow & backend": "Alur kerja & backend",
    "Year": "Tahun",
    "Carbon calculator · Dashboard · Live radar": "Kalkulator karbon · Dasbor · Radar langsung",
    "A carbon-emission calculator and monitoring system for aviation: emission records, spreadsheet import/export and reporting on top of a Laravel 12 application with PostgreSQL.": "Kalkulator dan sistem pemantauan emisi karbon untuk penerbangan: pencatatan emisi, impor/ekspor spreadsheet, dan pelaporan di atas aplikasi Laravel 12 dengan PostgreSQL.",
    "Deployed": "Sudah diluncurkan",
    "A neighbourhood administration system that manages households and occupancy history, generates dues automatically for permanent versus contract residents, tracks arrears, exports billing to Excel and keeps income/expense books with an interactive cash-flow dashboard.": "Sistem administrasi lingkungan warga yang mengelola data rumah tangga dan riwayat huni, menghasilkan iuran otomatis untuk warga tetap versus kontrak, melacak tunggakan, mengekspor tagihan ke Excel, dan mencatat buku pemasukan/pengeluaran dengan dasbor arus kas interaktif.",
    "Backend · team of 5": "Backend · tim 5 orang",
    "n8n agent · Analytics · Monitoring · Review log · Chatbot": "Agen n8n · Analitik · Pemantauan · Log ulasan · Chatbot",
    "Sentiment analysis for customer-service chat at PT Naraya Telematika: conversation logs scored per message, response-time monitoring, and an automated chatbot wired up through n8n workflows.": "Analisis sentimen untuk chat layanan pelanggan di PT Naraya Telematika: log percakapan diberi skor per pesan, pemantauan waktu respons, dan chatbot otomatis yang terhubung melalui alur kerja n8n.",
    "Backend & workflow": "Backend & alur kerja",
    "Inventory and asset-loan management for the Informatics Engineering department at Politeknik Negeri Malang — admin dashboard, borrowing records and item management.": "Manajemen inventaris dan peminjaman aset untuk jurusan Teknik Informatika di Politeknik Negeri Malang — dasbor admin, catatan peminjaman, dan pengelolaan barang.",
    "Web app": "Aplikasi web",
    "Admin dashboard": "Dasbor admin",
    "Team of 6": "Tim 6 orang",
    "Mobile application concept that identifies acne types from smartphone photos using image processing, then recommends treatment based on the analysis — HOG feature extraction with an SVM classifier.": "Konsep aplikasi mobile yang mengidentifikasi jenis jerawat dari foto ponsel menggunakan pengolahan citra, lalu merekomendasikan perawatan berdasarkan hasil analisis — ekstraksi fitur HOG dengan klasifier SVM.",
    "Employee Mood Analysis": "Analisis Mood Karyawan",
    "Internal HR form system that captures and analyses employee mood signals to support internal insight — built during my internship at PT. Surabaya Autocomp Indonesia.": "Sistem formulir HR internal yang menangkap dan menganalisis sinyal mood karyawan untuk mendukung wawasan internal — dibangun selama magang di PT. Surabaya Autocomp Indonesia.",
    "Internal tool": "Alat internal",
    "Scrap Data Entry": "Input Data Scrap",
    "Production-department web application that digitised scrap-data input for PT. Surabaya Autocomp Indonesia, replacing manual recording on the factory floor.": "Aplikasi web departemen produksi yang mendigitalkan input data scrap untuk PT. Surabaya Autocomp Indonesia, menggantikan pencatatan manual di lantai pabrik.",
    "Landing page & UI": "Halaman landing & UI",
    "Tools I actually work in": "Alat yang saya gunakan sehari-hari",
    "Languages": "Bahasa Pemrograman",
    "Frameworks & libraries": "Framework & library",
    "Databases": "Basis Data",
    "Tools & platforms": "Alat & platform",
    "Ways of working": "Cara kerja",
    "Team collaboration": "Kolaborasi tim",
    "Leadership": "Kepemimpinan",
    "Effective communication": "Komunikasi efektif",
    "Problem solving": "Pemecahan masalah",
    "A short log from my job — six months of building, breaking and learning. One entry per month, written as I go.": "Catatan singkat dari pekerjaan saya — enam bulan membangun, memperbaiki, dan belajar. Satu entri per bulan, ditulis sambil berjalan.",
    "01 / 06 written": "01 / 06 tertulis",
    "Month 01": "Bulan 01",
    "Development of a Carbon Emissions Dashboard": "Pengembangan Dasbor Emisi Karbon",
    "Two things defined this month. First, the maths: I worked through the aircraft carbon-emission formula — how fuel burn, flight distance and flight frequency turn into a CO₂ figure, and what the assumptions behind it actually mean.": "Ada dua hal yang membentuk bulan ini. Pertama, matematikanya: saya menelusuri rumus emisi karbon pesawat — bagaimana konsumsi bahan bakar, jarak terbang, dan frekuensi penerbangan berubah menjadi angka CO₂, serta apa arti asumsi di baliknya.",
    "Second, I turned that understanding into a working web application for calculating carbon emission, wiring the formula into something people can actually use. Alongside it, I started learning to work with the Hermes agent — picking up how to run tasks through it and where it genuinely speeds up the work.": "Kedua, saya mengubah pemahaman itu menjadi aplikasi web yang berfungsi untuk menghitung emisi karbon, menyalakan rumus tersebut menjadi sesuatu yang benar-benar bisa dipakai orang. Bersamaan dengan itu, saya mulai belajar bekerja dengan agen Hermes — memahami cara menjalankan tugas melaluinya dan di bagian mana ia benar-benar mempercepat pekerjaan.",
    "Aircraft carbon-emission formula and its underlying assumptions": "Rumus emisi karbon pesawat dan asumsi yang mendasarinya",
    "Building a carbon-emission calculation website": "Membangun situs perhitungan emisi karbon",
    "Working with the Hermes agent": "Bekerja dengan agen Hermes",
    "Weekly log": "Log mingguan",
    "Week 01": "Minggu 01",
    "Week 02": "Minggu 02",
    "28 September – 2 October 2026": "28 September – 2 Oktober 2026",
    "Week 03": "Minggu 03",
    "5–9 October 2026": "5–9 Oktober 2026",
    "Week 04": "Minggu 04",
    "Month 02 onward — coming as the internship progresses.": "Bulan 02 dan seterusnya — menyusul seiring berjalannya magang.",
    "Education & certifications": "Pendidikan & sertifikasi",
    "Applied Bachelor’s Degree (D4), Informatics Engineering": "Sarjana Terapan (D4), Teknik Informatika",
    "GPA 3.67": "IPK 3.67",
    "Relevant coursework: web development, mobile development, software engineering, algorithms, machine learning and artificial intelligence.": "Mata kuliah relevan: pengembangan web, pengembangan mobile, rekayasa perangkat lunak, algoritma, machine learning, dan kecerdasan artifisial.",
    "Computer & Network Engineering": "Teknik Komputer & Jaringan",
    "Certifications": "Sertifikasi",
    "Java Programming Class Certificate": "Sertifikat Kelas Pemrograman Java",
    "Course certificate": "Sertifikat kursus",
    "together.": "bersama.",
    "Have a project, a role or a problem worth solving? I’m open to software engineering and full-stack opportunities — the fastest way to reach me is email.": "Punya proyek, peran, atau masalah yang layak dipecahkan? Saya terbuka untuk peluang software engineering dan full-stack — cara tercepat menghubungi saya adalah lewat email.",
    "Message on LinkedIn": "Kirim pesan di LinkedIn",
    "Based in": "Berdomisili di",
    "Home": "Beranda",
    "The first week was about understanding what a professional environment actually looks like: how the IT division works and what the information-technology and operations administration role at AirNav Indonesia covers. I started on the Carbon Emission website — learning the carbon-emission calculation method with my mentor, putting the formula into the application, and presenting the progress I had made.": "Pada minggu pertama, saya memperoleh pemahaman mengenai lingkungan kerja profesional, alur kerja divisi IT, serta tanggung jawab sebagai staf administrasi teknologi informasi dan operasional di AirNav Indonesia. Saya mulai mengembangkan website Carbon Emission dengan mempelajari metode perhitungan emisi karbon bersama pembimbing, menerapkan rumus ke dalam aplikasi, dan mempresentasikan progres pengembangan.",
    "What I took from it: a first real experience of web application development, an understanding of why calculation logic has to be exact, and practice at taking feedback and applying it to improve both the interface and the function.": "Dari kegiatan ini, saya mendapatkan pengalaman awal dalam pengembangan aplikasi web, memahami pentingnya ketepatan logika perhitungan, serta belajar menerima dan menerapkan masukan untuk meningkatkan kualitas tampilan dan fungsi aplikasi.",
    "Going deeper into maintaining and extending the Carbon Emission website: fixing bugs, adjusting the formula to the ICAO Doc 9889 methodology, updating features, and refining the template and interface. I also worked with the other interns on repository management, learned to use the Hermes agent, and started building my personal portfolio site.": "Pada minggu kedua, saya memperdalam keterampilan dalam pemeliharaan dan pengembangan website Carbon Emission melalui perbaikan bug, penyesuaian rumus berdasarkan metodologi ICAO Doc 9889, pembaruan fitur, serta penyempurnaan template dan tampilan aplikasi. Saya juga berkolaborasi dengan rekan magang dalam pengelolaan repositori proyek, mempelajari penggunaan Hermes Agent, dan mulai membuat website portofolio pribadi.",
    "What I took from it: a better grasp of the debugging process, applying the correct calculation method, collaborating on shared software, and using AI as a tool that genuinely supports the work rather than replacing it.": "Pengalaman ini meningkatkan pemahaman saya mengenai proses debugging, penerapan metode perhitungan yang tepat, kolaborasi dalam pengembangan perangkat lunak, serta pemanfaatan AI sebagai alat bantu untuk mendukung produktivitas kerja.",
    "Building features against what users actually need: updating the Carbon Emission website and fixing the PDF export. I also started on SWORD, focused on improving its UI/UX, developing the chatbot, and exploring the AWS configuration the application needs for cloud. Alongside that I studied user authentication, access-rights management, admin features, system activity logging, and application security based on the OWASP Top 10.": "Pada minggu ketiga, saya memperoleh pengalaman mengembangkan aplikasi berdasarkan kebutuhan pengguna melalui pembaruan website Carbon Emission dan perbaikan fitur ekspor PDF. Saya juga mulai mengerjakan proyek SWORD yang berfokus pada peningkatan UI/UX, pengembangan chatbot, serta eksplorasi konfigurasi AWS untuk kebutuhan cloud aplikasi. Selain itu, saya mempelajari konsep autentikasi pengguna, pengelolaan hak akses, fitur admin, pencatatan aktivitas sistem, dan keamanan aplikasi berdasarkan OWASP Top 10.",
    "What I took from it: application development is not only about the interface — security, data management, infrastructure and how the user actually feels using it matter just as much.": "Kegiatan tersebut menambah wawasan saya mengenai pengembangan aplikasi yang tidak hanya memperhatikan tampilan, tetapi juga keamanan, pengelolaan data, infrastruktur, dan kenyamanan pengguna.",
    "Running several projects in parallel — continuing the Carbon Emission website, refining the SWORD chatbot and landing page, building the admin pages, learning to work with the local database and GitTea, and updating the personal portfolio site. I also learned to present finished work to Mas Diki, our EVP, and saw why professional communication matters in a project review. A meeting with the operations team about the Carbon Emission dashboard made clear that the application has to follow real user requirements — including a proposal to add CO₂ calculation for the Terminal Maneuvering Area (TMA).": "Pada minggu keempat, saya meningkatkan pengalaman dalam mengembangkan beberapa proyek secara paralel, yaitu melanjutkan website Carbon Emission, menyempurnakan chatbot dan landing page SWORD, membuat halaman admin, mempelajari penggunaan database lokal dan GitTea, serta memperbarui website portofolio pribadi. Saya juga belajar mempresentasikan hasil pekerjaan kepada Mas Diki selaku EVP dan memahami pentingnya komunikasi profesional dalam proses evaluasi proyek. Selain itu, melalui meeting bersama tim operasional mengenai dashboard Carbon Emission, saya memahami bahwa pengembangan aplikasi perlu disesuaikan dengan kebutuhan nyata pengguna, termasuk usulan penambahan fitur perhitungan CO₂ pada area Terminal Maneuvering Area (TMA).",
    "What I took from it: stronger technical ability, cross-team collaboration, problem solving, and a clearer picture of how requirements from operations should shape what gets built.": "Pengalaman ini memperkuat kemampuan teknis, kolaborasi lintas tim, pemecahan masalah, dan pemahaman saya mengenai proses pengembangan aplikasi berdasarkan kebutuhan operasional.",
    "4 weeks · 21 Sep – 21 Oct 2026": "4 minggu · 21 Sep – 21 Okt 2026",
    "12–21 October 2026": "12–21 Oktober 2026"
  },
  "attr": {
    "Farrel Edric — home": "Farrel Edric — beranda",
    "Primary": "Utama",
    "Switch to light theme": "Ganti ke tema terang",
    "Switch to dark theme": "Ganti ke tema gelap",
    "Open menu": "Buka menu",
    "Mobile": "Seluler",
    "Elsewhere": "Di tempat lain",
    "LinkedIn profile": "Profil LinkedIn",
    "GitHub profile": "Profil GitHub",
    "Portrait of Farrel Edric": "Potret Farrel Edric",
    "ACE project screenshots": "Tangkapan layar proyek ACE",
    "Previous screenshot": "Tangkapan layar sebelumnya",
    "Next screenshot": "Tangkapan layar berikutnya",
    "Choose screenshot": "Pilih tangkapan layar",
    "Go to image 1 of 3": "Ke gambar 1 dari 3",
    "Go to image 2 of 3": "Ke gambar 2 dari 3",
    "Go to image 3 of 3": "Ke gambar 3 dari 3",
    "Go to image 1 of 5": "Ke gambar 1 dari 5",
    "Go to image 2 of 5": "Ke gambar 2 dari 5",
    "Go to image 3 of 5": "Ke gambar 3 dari 5",
    "Go to image 4 of 5": "Ke gambar 4 dari 5",
    "Go to image 5 of 5": "Ke gambar 5 dari 5",
    "Progress log: month 1 of 6 written, 5 remaining": "Log kemajuan: bulan 1 dari 6 tertulis, 5 tersisa",
    "The n8n CV screening workflow: a Webhook receives the CV, then Extract from File and Code nodes parse it, an OpenAI chat model fills Personal Data and Qualifications fields, and the scored result is summarised and written to Google Sheets before being sent back to Laravel": "Alur kerja seleksi CV di n8n: Webhook menerima CV, lalu node Extract from File dan Code mengurainya, model chat OpenAI mengisi kolom Personal Data dan Qualifications, dan hasil berskor dirangkum lalu ditulis ke Google Sheets sebelum dikirim kembali ke Laravel",
    "HR Hub careers landing page: 'Find Your Dream Career Here' with latest vacancies for Senior Backend Developer (Laravel), Fullstack Developer and UI/UX Designer": "Halaman landing karier HR Hub: 'Find Your Dream Career Here' dengan lowongan terbaru untuk Senior Backend Developer (Laravel), Fullstack Developer, dan UI/UX Designer",
    "HR Hub workflow: the candidate repository table and the AI CV Analysis form that scores a resume against employment history, skills and job description. The candidate row is pixelated for privacy": "Alur kerja HR Hub: tabel repositori kandidat dan formulir AI CV Analysis yang memberi skor resume terhadap riwayat pekerjaan, keterampilan, dan deskripsi pekerjaan. Baris kandidat dipikselkan demi privasi",
    "ACE carbon calculator: route and saving parameters on the left, total CO2 reduced, fuel saved, cost saving and tree-absorption equivalent on the right": "Kalkulator karbon ACE: parameter rute dan penghematan di kiri, total CO2 yang dikurangi, bahan bakar yang dihemat, penghematan biaya, dan ekuivalen serapan pohon di kanan",
    "ACE dashboard: KPI cards for total flights, CO2, CO2 per passenger, fuel, passengers and load factor, with a CO2 emission trend chart and a CO2 by aircraft type doughnut chart": "Dasbor ACE: kartu KPI untuk total penerbangan, CO2, CO2 per penumpang, bahan bakar, penumpang, dan load factor, dengan grafik tren emisi CO2 dan diagram donat CO2 per tipe pesawat",
    "ACE real-time flight radar map: 393 active aircraft tracked live over Indonesian airspace with a climbing, descending and on-ground legend": "Peta radar penerbangan real-time ACE: 393 pesawat aktif dilacak langsung di ruang udara Indonesia dengan legenda climbing, descending, dan on-ground",
    "The sentiment_vector workflow in n8n: a webhook feeds an AI Agent that draws on an OpenAI chat model, a Postgres chat memory, a conversation vector tool and embeddings, then returns a structured parsed response to the webhook": "Alur kerja sentiment_vector di n8n: webhook memberi masukan ke AI Agent yang memakai model chat OpenAI, memori chat Postgres, alat vektor percakapan, dan embeddings, lalu mengembalikan respons terstruktur ke webhook",
    "Sparkchat analytics overview: 787 total messages, 51.35% positive and 24.32% negative feedback, and a chat activity trend chart comparing customer messages with CS responses": "Ringkasan analitik Sparkchat: 787 total pesan, 51,35% umpan balik positif dan 24,32% negatif, serta grafik tren aktivitas chat yang membandingkan pesan pelanggan dengan respons CS",
    "Sparkchat report monitoring dashboard: fast vs slow response counts, total incoming chats and feedback, and five satisfaction cards. The agent name column is pixelated for privacy": "Dasbor pemantauan laporan Sparkchat: jumlah respons cepat vs lambat, total chat dan umpan balik masuk, serta lima kartu kepuasan. Kolom nama agen dipikselkan demi privasi",
    "Sparkchat customer review log: positive, neutral and negative sentiment totals with a per-conversation log. The customer, customer service and room ID columns are pixelated for privacy": "Log ulasan pelanggan Sparkchat: total sentimen positif, netral, dan negatif dengan log per percakapan. Kolom pelanggan, customer service, dan ID room dipikselkan demi privasi",
    "Sparkchat chatbot screen answering 'Berapa sentimen positif?' with a structured response from an n8n workflow": "Layar chatbot Sparkchat yang menjawab 'Berapa sentimen positif?' dengan respons terstruktur dari alur kerja n8n"
  },
  "title": {
    "en": "Farrel Edric — Software Engineer & Full-stack Developer",
    "id": "Farrel Edric — Software Engineer & Full-stack Developer"
  },
  "desc": {
    "en": "Farrel Edric (Fransiscus Farrel Edric Wijanarko) is a software engineer and full-stack developer based in Kota Malang, Indonesia, building production web applications with Laravel, Django, React, Node.js and PostgreSQL.",
    "id": "Farrel Edric (Fransiscus Farrel Edric Wijanarko) adalah software engineer dan full-stack developer yang berdomisili di Kota Malang, Indonesia, membangun aplikasi web produksi dengan Laravel, Django, React, Node.js, dan PostgreSQL."
  }
};

  var ID = DATA.id;
  var ATTR = DATA.attr;

  /* Padanan untuk teks yang mengapit elemen inline (<em>, <span>, <a>).
     Simpul seperti ini tidak pernah muncul sebagai "elemen daun", jadi tidak
     tertangkap saat kamus dibuat. Didaftarkan terpisah di sini.
     Perhatikan spasi di ujung/awal beberapa nilai: teks ini menyambung dengan
     <em> di sebelahnya, jadi spasinya harus dijaga agar kalimat tidak menempel. */
  Object.assign(ID, {
    "I’m a developer who’d rather": "Saya developer yang lebih suka ",
    "ship something real": "membuat sesuatu yang nyata ",
    "than talk about it.": "dibanding sekadar membicarakannya.",
    "View My Work": "Lihat Karya Saya",
    "View repository": "Lihat repositori",
    "Live site": "Situs live",
    "More work": "Karya lainnya",
    "Let’s work": "Mari bekerja",
    "Get in touch": "Hubungi saya",
    "Back to top": "Kembali ke atas",
    "Sentiment analysis": "Analisis sentimen",
    "Fransiscus Farrel Edric Wijanarko. All rights reserved.":
        " Fransiscus Farrel Edric Wijanarko. Seluruh hak cipta dilindungi.",

    ", broadcast by Kemnaker. The first real assignment was the Carbon Emission website — learning the emission calculation method with my mentor, implementing it into the site, then presenting the progress I had made.":
        ", yang disiarkan oleh Kemnaker. Tugas nyata pertama adalah situs Carbon Emission — mempelajari metode perhitungan emisi bersama mentor, mengimplementasikannya ke dalam situs, lalu mempresentasikan progres yang sudah saya buat."
  });
  var KEY = 'fe-lang';
  var teksAsli = new WeakMap();
  var attrAsli = new WeakMap();
  var ATTR_NAMA = ['aria-label', 'placeholder', 'alt', 'title'];

  function norm(s) {
    return (s || '').replace(/\s+/g, ' ').trim();
  }

  function simpulTeks() {
    var out = [];
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
    while (walker.nextNode()) {
      var n = walker.currentNode;
      var p = n.parentElement;
      if (!p) continue;
      if (/^(SCRIPT|STYLE|NOSCRIPT|CODE|PRE)$/.test(p.tagName)) continue;
      out.push(n);
    }
    return out;
  }

  var simpul = null;

  function ke(kunciBahasa) {
    if (!simpul) simpul = simpulTeks();
    var pakaiID = kunciBahasa === 'id';

    simpul.forEach(function (n) {
      var kunci = norm(n.nodeValue);
      if (!kunci) return;

      if (pakaiID && Object.prototype.hasOwnProperty.call(ID, kunci)) {
        if (!teksAsli.has(n)) teksAsli.set(n, n.nodeValue);
        n.nodeValue = ID[kunci];
      } else if (teksAsli.has(n)) {
        n.nodeValue = teksAsli.get(n);
        teksAsli.delete(n);
      }
    });

    var els = document.querySelectorAll('[aria-label],[placeholder],[alt],[title]');
    Array.prototype.forEach.call(els, function (el) {
      ATTR_NAMA.forEach(function (a) {
        var v = el.getAttribute(a);
        if (v === null) return;
        var kunci = norm(v);
        if (!kunci) return;

        if (pakaiID && Object.prototype.hasOwnProperty.call(ATTR, kunci)) {
          var simpan = attrAsli.get(el) || {};
          if (!(a in simpan)) simpan[a] = v;
          attrAsli.set(el, simpan);
          el.setAttribute(a, ATTR[kunci]);
        } else {
          var lama = attrAsli.get(el);
          if (lama && a in lama) {
            el.setAttribute(a, lama[a]);
            delete lama[a];
          }
        }
      });
    });

    // Judul tab dan deskripsi mesin pencari ikut berganti.
    document.title = DATA.title[kunciBahasa] || DATA.title.en;
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', DATA.desc[kunciBahasa] || DATA.desc.en);

    document.documentElement.setAttribute('lang', pakaiID ? 'id' : 'en');
    document.documentElement.setAttribute('data-lang', pakaiID ? 'id' : 'en');

    // Label tombol tema dipasang ulang oleh main.js saat tema berganti,
    // jadi diterjemahkan lagi di sini setiap kali bahasa berubah.
    var tema = document.getElementById('theme-toggle');
    if (tema) {
      var gelap = document.documentElement.getAttribute('data-theme') !== 'light';
      var label = gelap ? 'Switch to light theme' : 'Switch to dark theme';
      tema.setAttribute('aria-label', pakaiID ? (ATTR[label] || label) : label);
    }

    var tombol = document.getElementById('lang-toggle');
    if (tombol) {
      tombol.setAttribute('aria-pressed', pakaiID ? 'true' : 'false');
      tombol.setAttribute('aria-label', pakaiID
        ? 'Ganti ke bahasa Inggris'
        : 'Switch to Indonesian');
    }
  }

  function awal() {
    var lang = 'en';
    try {
      var s = localStorage.getItem(KEY);
      if (s === 'id' || s === 'en') lang = s;
    } catch (e) {}
    ke(lang);

    var tombol = document.getElementById('lang-toggle');
    if (!tombol) return;

    tombol.addEventListener('click', function () {
      var sekarang = document.documentElement.getAttribute('data-lang') === 'id' ? 'id' : 'en';
      var baru = sekarang === 'id' ? 'en' : 'id';
      try { localStorage.setItem(KEY, baru); } catch (e) {}
      ke(baru);
      // Beri tahu bagian lain (mis. penggeser yang menulis teks sendiri).
      document.dispatchEvent(new CustomEvent('fe:lang', { detail: { lang: baru } }));
    });
  }

  window.FE_i18n = {
    get: function () {
      return document.documentElement.getAttribute('data-lang') === 'id' ? 'id' : 'en';
    },
    /* Dipakai skrip pemeriksaan untuk mencari teks yang belum punya padanan. */
    dict: function () { return ID; },
    t: function (en) {
      var k = norm(en);
      return (this.get() === 'id' && ATTR[k]) || (this.get() === 'id' && ID[k]) || en;
    },
    apply: ke
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', awal);
  } else {
    awal();
  }
})();

// ============================================
// COMPLETE UNITS DATA BASED ON TVET-CDACC CURRICULUM
// ============================================

const unitsData = [
  // MODULE I
  { id: 1, name: "Computer Organisation and Architecture", module: "module1", duration: "180 hrs", description: "CPU design, memory hierarchy, I/O systems, and computer arithmetic." },
  { id: 2, name: "Operating Systems Configuration", module: "module1", duration: "240 hrs", description: "Process management, memory management, file systems, and OS configuration." },
  // MODULE II
  { id: 3, name: "Networking and Distributed Systems", module: "module2", duration: "220 hrs", description: "Network protocols, distributed computing, client-server models." },
  { id: 4, name: "Graphics Design", module: "module2", duration: "190 hrs", description: "Vector/raster graphics, UI/UX principles, Adobe tools, design thinking." },
  // MODULE III
  { id: 5, name: "Database Management", module: "module3", duration: "210 hrs", description: "SQL, database design, normalization, transactions, and NoSQL basics." },
  { id: 6, name: "Web Designing", module: "module3", duration: "220 hrs", description: "HTML5, CSS3, JavaScript, responsive frameworks, and modern web standards." },
  // MODULE IV
  { id: 7, name: "Basic Electronic Skills", module: "module4", duration: "180 hrs", description: "Circuit analysis, breadboarding, basic electronic components and soldering." },
  { id: 8, name: "Fundamentals of Programming", module: "module4", duration: "200 hrs", description: "Programming logic, loops, functions, arrays, and problem solving with Python/Java." },
  // WORK ETHICS
  { id: 9, name: "Work Ethics and Practices", module: "work_ethics", duration: "40 hrs", description: "Professional conduct, workplace communication, integrity, and teamwork." },
  // MODULE V
  { id: 10, name: "Entrepreneurial Skills", module: "module5", duration: "40 hrs", description: "Business planning, innovation, marketing, and startup fundamentals." },
  { id: 11, name: "Algorithms and Data Structures", module: "module5", duration: "190 hrs", description: "Sorting, searching, trees, graphs, complexity analysis, and recursion." },
  { id: 12, name: "Mathematics for Computer Science", module: "module5", duration: "170 hrs", description: "Discrete mathematics, logic, set theory, probability, and linear algebra." },
  // MODULE VI
  { id: 13, name: "Communication Skills", module: "module6", duration: "40 hrs", description: "Technical writing, presentation skills, interpersonal communication." },
  { id: 14, name: "Information Systems Development", module: "module6", duration: "200 hrs", description: "SDLC, agile methodologies, system analysis, and prototyping." },
  { id: 15, name: "Artificial Intelligence Concepts", module: "module6", duration: "180 hrs", description: "Machine learning basics, neural networks, expert systems, and AI ethics." }
];

// ============================================
// INDIVIDUAL GRADES FOR EACH UNIT (Customize these!)
// ============================================

const unitGrades = {
  1: { cat1: "92%", cat2: "85%", exam: "90%", lab1: "88%", lab2: "92%", project: "94%" },
  2: { cat1: "82%", cat2: "79%", exam: "87%", lab1: "84%", lab2: "88%", project: "91%" },
  3: { cat1: "86%", cat2: "89%", exam: "93%", lab1: "90%", lab2: "87%", project: "95%" },
  4: { cat1: "75%", cat2: "80%", exam: "84%", lab1: "83%", lab2: "86%", project: "88%" },
  5: { cat1: "81%", cat2: "84%", exam: "88%", lab1: "85%", lab2: "87%", project: "92%" },
  6: { cat1: "77%", cat2: "80%", exam: "85%", lab1: "82%", lab2: "86%", project: "89%" },
  7: { cat1: "79%", cat2: "83%", exam: "86%", lab1: "84%", lab2: "85%", project: "90%" },
  8: { cat1: "88%", cat2: "91%", exam: "94%", lab1: "89%", lab2: "93%", project: "96%" },
  9: { cat1: "92%", cat2: "94%", exam: "96%", lab1: "90%", lab2: "93%", project: "95%" },
  10: { cat1: "85%", cat2: "88%", exam: "90%", lab1: "86%", lab2: "89%", project: "91%" },
  11: { cat1: "87%", cat2: "90%", exam: "92%", lab1: "88%", lab2: "91%", project: "94%" },
  12: { cat1: "83%", cat2: "86%", exam: "89%", lab1: "85%", lab2: "87%", project: "90%" },
  13: { cat1: "90%", cat2: "92%", exam: "94%", lab1: "91%", lab2: "93%", project: "95%" },
  14: { cat1: "84%", cat2: "87%", exam: "89%", lab1: "86%", lab2: "88%", project: "91%" },
  15: { cat1: "88%", cat2: "91%", exam: "93%", lab1: "89%", lab2: "92%", project: "94%" }
};

// ============================================
// FUNCTION TO GENERATE ASSESSMENTS WITH INDIVIDUAL IMAGES
// ============================================

function generateAssessments(unitId, unitName) {
  const grades = unitGrades[unitId];
  
  // WRITTEN ASSESSMENTS with individual image paths
  const writtenBase = [
    { 
      title: `CAT 1: ${unitName.substring(0, 22)} Fundamentals`, 
      grade: grades.cat1, 
      imagePath: `assets/results/unit${unitId}/cat1-marked.jpg`,
      type: "Marked Script"
    },
    { 
      title: `CAT 2: ${unitName.substring(0, 22)} Advanced`, 
      grade: grades.cat2, 
      imagePath: `assets/results/unit${unitId}/cat2-marked.jpg`,
      type: "Marked Script"
    },
    { 
      title: `Final Exam: Comprehensive ${unitName.substring(0, 18)}`, 
      grade: grades.exam, 
      imagePath: `assets/results/unit${unitId}/exam-marked.jpg`,
      type: "Marked Script"
    }
  ];
  
  // PRACTICAL ASSESSMENTS with individual image paths
  const practicalBase = [
    { 
      title: `Lab 1: Hands-on Implementation`, 
      grade: grades.lab1, 
      imagePath: `assets/results/unit${unitId}/lab1-checklist.jpg`,
      type: "Observation Checklist"
    },
    { 
      title: `Lab 2: Practical Case Study`, 
      grade: grades.lab2, 
      imagePath: `assets/results/unit${unitId}/lab2-checklist.jpg`,
      type: "Observation Checklist"
    },
    { 
      title: `Practical Assessment: Real-world Project`, 
      grade: grades.project, 
      imagePath: `assets/results/unit${unitId}/project-checklist.jpg`,
      type: "Observation Checklist"
    }
  ];
  
  // VIDEO EVIDENCE (3 units have videos)
  let videoEvidence = null;
  if (unitId === 1) {
    videoEvidence = "assets/videos/unit1-demo.mp4";
  } else if (unitId === 5) {
    videoEvidence = "assets/videos/unit5-demo.mp4";
  } else if (unitId === 11) {
    videoEvidence = "assets/videos/unit11-demo.mp4";
  }
  
  // GALLERY IMAGES (can be same across units or customized)
  const gallery = [
    "assets/images/gallery/git-commit.png",
    "assets/images/gallery/certificate.png",
    "assets/images/gallery/testimonial.png"
  ];
  
  return { written: writtenBase, practical: practicalBase, videoEvidence, gallery };
}

// Build assessments map
const assessmentsMap = {};
unitsData.forEach(unit => {
  assessmentsMap[unit.id] = generateAssessments(unit.id, unit.name);
});

// ============================================
// RENDER UNITS WITH FILTER FUNCTIONALITY
// ============================================

function renderUnits(filter = "all") {
  const container = document.getElementById("unitsContainer");
  let filtered = [...unitsData];
  if (filter !== "all") {
    filtered = unitsData.filter(unit => unit.module === filter);
  }
  container.innerHTML = "";
  
  filtered.forEach(unit => {
    const card = document.createElement("div");
    card.className = "unit-card";
    
    let moduleLabel = "";
    switch(unit.module) {
      case "module1": moduleLabel = "📘 Module I"; break;
      case "module2": moduleLabel = "📗 Module II"; break;
      case "module3": moduleLabel = "📕 Module III"; break;
      case "module4": moduleLabel = "📙 Module IV"; break;
      case "module5": moduleLabel = "📒 Module V"; break;
      case "module6": moduleLabel = "📔 Module VI"; break;
      case "work_ethics": moduleLabel = "⭐ Work Ethics"; break;
      default: moduleLabel = "📌 Unit";
    }
    
    card.innerHTML = `
      <h3><i class="fas fa-microchip"></i> ${unit.name}</h3>
      <div class="duration"><i class="far fa-clock"></i> Duration: ${unit.duration}</div>
      <p style="color:#2c5a7a; margin-top:8px;">${unit.description}</p>
      <span class="module-tag">${moduleLabel}</span>
      <div style="margin-top: 14px;"><button class="btn-download view-details" data-id="${unit.id}">📂 Assessments & Evidence</button></div>
    `;
    container.appendChild(card);
  });
  
  document.querySelectorAll(".view-details").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const id = parseInt(btn.getAttribute("data-id"));
      openUnitModal(id);
    });
  });
}

// ============================================
// OPEN MODAL WITH UNIT DETAILS (showing images)
// ============================================

function openUnitModal(unitId) {
  const unit = unitsData.find(u => u.id === unitId);
  const assess = assessmentsMap[unitId];
  if (!assess) return;
  
  const modal = document.getElementById("unitModal");
  document.getElementById("modalUnitTitle").innerHTML = `${unit.name} <span style="font-size:0.9rem; color:#1976d2;"> (${unit.duration})</span>`;
  
  let html = `<p>${unit.description}</p>
              <h3>✍️ Written Assessments (Minimum 3)</h3>
              <table class="assessment-table">
                <tr><th>Assessment</th><th>Grade/Marks</th><th>Marked Script (Image)</th></tr>`;
  
  assess.written.forEach(w => {
    html += `<tr>
              <td>${w.title}</td>
              <td>${w.grade}</strong> <span style="font-size:0.75rem; color:#1976d2;">✓ Pass</span></td>
              <td><button class="btn-download view-image-btn" data-image="${w.imagePath}" data-title="${w.title}"><i class="fas fa-image"></i> View Marked Script</button></td>
            </tr>`;
  });
  
  html += `</table>
           <h3>🛠️ Practical Assessments (Minimum 3)</h3>
           <table class="assessment-table">
             <tr><th>Practical Task</th><th>Grade</th><th>Observation Checklist (Image)</th></tr>`;
  
  assess.practical.forEach(p => {
    html += `<tr>
              <td>${p.title}</td>
              <td>${p.grade}</strong> <span style="font-size:0.75rem; color:#1976d2;">✓ Competent</span></td>
              <td><button class="btn-download view-image-btn" data-image="${p.imagePath}" data-title="${p.title}"><i class="fas fa-clipboard-list"></i> View Checklist</button></td>
            </tr>`;
  });
  
  html += `</table>`;
  
  // VIDEO EVIDENCE
  if (assess.videoEvidence) {
    html += `<div class="video-embed">
               <h3>🎥 Video Evidence (Practical Demonstration)</h3>
               <video width="100%" height="240" controls>
                 <source src="${assess.videoEvidence}" type="video/mp4">
                 Your browser does not support the video tag.
               </video>
               <p><i class="fas fa-video"></i> Student performing ${unit.name} practical task.</p>
             </div>`;
  } else {
    html += `<div class="video-embed">
               <h3>🎥 Video Portfolio Note</h3>
               <p><i class="fab fa-youtube"></i> Video evidence available for Units 1, 5, and 11.</p>
             </div>`;
  }
  
  // GALLERY AND ADDITIONAL EVIDENCE
  html += `<h3>📸 Additional Evidence Portfolio</h3>
           <div class="evidence-gallery" id="gallery-${unitId}"></div>
           <div style="margin-top: 1rem; background:#eef5fc; padding:1rem; border-radius: 1rem; border-left: 4px solid #1976d2;">
             <p><i class="fas fa-users"></i> <strong>Testimonial / Peer Review:</strong> "Roney demonstrated strong analytical skills and team collaboration."</p>
             <p><i class="fas fa-certificate"></i> <strong>Certificates:</strong> Python Certification, GitHub Campus Expert, TVET ICT Badge.</p>
             <p><i class="fab fa-github"></i> <strong>Code Commits:</strong> <a href="#">View GitHub history</a> – consistent contributions.</p>
           </div>`;
  
  document.getElementById("modalBody").innerHTML = html;
  modal.style.display = "flex";
  
  // Add click handlers for all view-image buttons
  document.querySelectorAll(".view-image-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const imagePath = btn.getAttribute("data-image");
      const title = btn.getAttribute("data-title");
      openImageLightbox(imagePath, title);
    });
  });
  
  // Populate gallery with local images
  const galleryDiv = document.getElementById(`gallery-${unitId}`);
  if (assess.gallery && galleryDiv) {
    assess.gallery.forEach(src => {
      const img = document.createElement("img");
      img.src = src;
      img.classList.add("gallery-item");
      img.addEventListener("click", () => openLightbox(src));
      galleryDiv.appendChild(img);
    });
  }
}

// Open image in lightbox (for result images)
function openImageLightbox(imagePath, title) {
  const lightbox = document.getElementById("lightbox");
  const img = document.getElementById("lightboxImg");
  img.src = imagePath;
  img.alt = title;
  lightbox.style.visibility = "visible";
  
  // Add caption
  let caption = document.querySelector(".lightbox-caption");
  if (!caption) {
    caption = document.createElement("div");
    caption.className = "lightbox-caption";
    caption.style.cssText = "position: absolute; bottom: 20px; left: 0; right: 0; text-align: center; color: white; background: rgba(0,0,0,0.7); padding: 10px; font-size: 14px;";
    lightbox.appendChild(caption);
  }
  caption.innerHTML = title;
  
  lightbox.addEventListener("click", () => {
    lightbox.style.visibility = "hidden";
  });
}

// Regular lightbox for gallery
function openLightbox(src) {
  const lightbox = document.getElementById("lightbox");
  const img = document.getElementById("lightboxImg");
  img.src = src;
  lightbox.style.visibility = "visible";
  lightbox.addEventListener("click", () => {
    lightbox.style.visibility = "hidden";
  });
}

// ============================================
// EVENT LISTENERS & INITIALIZATION
// ============================================

// Mobile menu toggle
const menuToggle = document.getElementById("mobile-menu");
const navLinks = document.getElementById("nav-links");
if (menuToggle) {
  menuToggle.addEventListener("click", () => navLinks.classList.toggle("show"));
}

// Active nav highlight on scroll
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-link");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) current = section.getAttribute("id");
  });
  navItems.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) link.classList.add("active");
  });
});

// Filter buttons
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const filterVal = btn.getAttribute("data-filter");
    renderUnits(filterVal);
  });
});

// Contact form validation
const contactForm = document.getElementById("contactForm");
const feedback = document.getElementById("formFeedback");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    
    if (!name || !email || !message) {
      feedback.innerHTML = "<span style='color:#d32f2f'>All fields are required!</span>";
      return;
    }
    if (!email.includes("@") || !email.includes(".")) {
      feedback.innerHTML = "<span style='color:#d32f2f'>Valid email required.</span>";
      return;
    }
    feedback.innerHTML = "<span style='color:#1976d2'>✓ Message sent successfully!</span>";
    contactForm.reset();
  });
}

// Close modal
document.querySelector(".close-modal")?.addEventListener("click", () => {
  document.getElementById("unitModal").style.display = "none";
});
window.onclick = function(e) {
  const modal = document.getElementById("unitModal");
  if (e.target === modal) modal.style.display = "none";
  const light = document.getElementById("lightbox");
  if (e.target === light) light.style.visibility = "hidden";
};

// Initialize
renderUnits("all");
const forms = {
      home: `
        <h2><i class="fas fa-home"></i> Welcome to DocForms</h2>
        <p>Please select a document form from the navbar above to proceed with your application.</p>
      `,
      birth: `
        <h2><i class="fas fa-baby"></i> Birth Certificate Form</h2>
        <form id="birthForm" novalidate>
          <div class="mb-3">
            <label for="birthName" class="form-label">Name <span class="text-danger">*</span></label>
            <input type="text" class="form-control" id="birthName" name="name" required placeholder="Enter your name" />
            <div class="invalid-feedback">Please enter your name.</div>
          </div>
          <div class="mb-3">
            <label for="birthFatherName" class="form-label">Father's Name <span class="text-danger">*</span></label>
            <input type="text" class="form-control" id="birthFatherName" name="fatherName" required placeholder="Enter father's name" />
            <div class="invalid-feedback">Please enter father's name.</div>
          </div>
          <div class="mb-3">
            <label for="birthMotherName" class="form-label">Mother's Name <span class="text-danger">*</span></label>
            <input type="text" class="form-control" id="birthMotherName" name="motherName" required placeholder="Enter mother's name" />
            <div class="invalid-feedback">Please enter mother's name.</div>
          </div>
          <div class="mb-3">
            <label for="birthGrandFatherName" class="form-label">Grandfather's Name <span class="text-danger">*</span></label>
            <input type="text" class="form-control" id="birthGrandFatherName" name="grandFatherName" required placeholder="Enter grandfather's name" />
            <div class="invalid-feedback">Please enter grandfather's name.</div>
          </div>
          <div class="mb-3">
            <label class="form-label">Gender <span class="text-danger">*</span></label>
            <div class="gender-options">
              <div class="gender-option">
                <input type="radio" id="genderMale" name="gender" value="Male" required />
                <label for="genderMale" class="form-label mb-0">Male</label>
              </div>
              <div class="gender-option">
                <input type="radio" id="genderFemale" name="gender" value="Female" />
                <label for="genderFemale" class="form-label mb-0">Female</label>
              </div>
              <div class="gender-option">
                <input type="radio" id="genderOther" name="gender" value="Other" />
                <label for="genderOther" class="form-label mb-0">Other</label>
              </div>
            </div>
            <div class="invalid-feedback">Please select your gender.</div>
          </div>
          <div class="mb-3">
            <label for="birthDob" class="form-label">Date of Birth <span class="text-danger">*</span></label>
            <input type="date" class="form-control" id="birthDob" name="dob" required />
            <div class="invalid-feedback">Please select date of birth.</div>
          </div>
          <button type="submit" class="btn btn-submit w-100"><i class="fas fa-paper-plane"></i> Submit</button>
        </form>
      `,
      certificate: `
        <h2><i class="fas fa-certificate"></i> Certificate Form</h2>
        <form id="certificateForm" novalidate>
          <div class="mb-3">
            <label for="certName" class="form-label">Name <span class="text-danger">*</span></label>
            <input type="text" class="form-control" id="certName" name="name" required placeholder="Enter your name" />
            <div class="invalid-feedback">Please enter your name.</div>
          </div>
          <div class="mb-3">
            <label for="certFatherName" class="form-label">Father's Name <span class="text-danger">*</span></label>
            <input type="text" class="form-control" id="certFatherName" name="fatherName" required placeholder="Enter father's name" />
            <div class="invalid-feedback">Please enter father's name.</div>
          </div>
          <div class="mb-3">
            <label for="certMotherName" class="form-label">Mother's Name <span class="text-danger">*</span></label>
            <input type="text" class="form-control" id="certMotherName" name="motherName" required placeholder="Enter mother's name" />
            <div class="invalid-feedback">Please enter mother's name.</div>
          </div>
          <div class="mb-3">
            <label for="certDob" class="form-label">Date of Birth <span class="text-danger">*</span></label>
            <input type="date" class="form-control" id="certDob" name="dob" required />
            <div class="invalid-feedback">Please select date of birth.</div>
          </div>
          <div class="mb-3">
            <label for="certPassingYear" class="form-label">Passing Year <span class="text-danger">*</span></label>
            <input type="number" class="form-control" id="certPassingYear" name="passingYear" required min="1900" max="2100" placeholder="Enter passing year" />
            <div class="invalid-feedback">Please enter a valid passing year.</div>
          </div>
          <button type="submit" class="btn btn-submit w-100"><i class="fas fa-paper-plane"></i> Submit</button>
        </form>
      `,
      address: `
        <h2><i class="fas fa-address-card"></i> Address Document Form</h2>
        <form id="addressForm" novalidate enctype="multipart/form-data">
          <div class="mb-3">
            <label for="addrName" class="form-label">Name <span class="text-danger">*</span></label>
            <input type="text" class="form-control" id="addrName" name="name" required placeholder="Enter your name" />
            <div class="invalid-feedback">Please enter your name.</div>
          </div>
          <div class="mb-3">
            <label for="addrFatherName" class="form-label">Father's Name <span class="text-danger">*</span></label>
            <input type="text" class="form-control" id="addrFatherName" name="fatherName" required placeholder="Enter father's name" />
            <div class="invalid-feedback">Please enter father's name.</div>
          </div>
          <div class="mb-3">
            <label for="addrDob" class="form-label">Date of Birth <span class="text-danger">*</span></label>
            <input type="date" class="form-control" id="addrDob" name="dob" required />
            <div class="invalid-feedback">Please select date of birth.</div>
          </div>
          <div class="mb-3">
            <label for="addrAddress" class="form-label">Address <span class="text-danger">*</span></label>
            <textarea class="form-control" id="addrAddress" name="address" rows="3" required placeholder="Enter your address"></textarea>
            <div class="invalid-feedback">Please enter your address.</div>
          </div>
          <div class="mb-3">
            <label for="addrAadhar" class="form-label">Aadhar Number <span class="text-danger">*</span></label>
            <input type="text" class="form-control" id="addrAadhar" name="aadhar" required pattern="\\d{12}" placeholder="Enter 12-digit Aadhar number" />
            <div class="invalid-feedback">Please enter a valid 12-digit Aadhar number.</div>
          </div>
          <div class="mb-3">
            <label for="addrPhone" class="form-label">Phone Number <span class="text-danger">*</span></label>
            <input type="tel" class="form-control" id="addrPhone" name="phone" required pattern="\\d{10}" placeholder="Enter 10-digit phone number" />
            <div class="invalid-feedback">Please enter a valid 10-digit phone number.</div>
          </div>
          <div class="mb-3">
            <label for="addrPhoto" class="form-label">Upload Passport Size Photo <span class="text-danger">*</span></label>
            <input type="file" class="form-control" id="addrPhoto" name="photo" accept="image/*" required />
            <div class="invalid-feedback">Please upload a passport size photo.</div>
          </div>
          <button type="submit" class="btn btn-submit w-100"><i class="fas fa-paper-plane"></i> Submit</button>
        </form>
      `
    };

    // WhatsApp number
    const whatsappNumber = "9877388501";

    // Reference to container
    const container = document.getElementById('form-container');

    // Load form by key
    function loadForm(formKey) {
      container.style.opacity = 0;
      setTimeout(() => {
        container.innerHTML = forms[formKey];
        container.style.opacity = 1;
        attachFormHandler(formKey);
      }, 300);
    }

    // Attach form submit handler
    function attachFormHandler(formKey) {
      let form;
      if (formKey === 'birth') form = document.getElementById('birthForm');
      else if (formKey === 'certificate') form = document.getElementById('certificateForm');
      else if (formKey === 'address') form = document.getElementById('addressForm');
      else return;

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        e.stopPropagation();

        if (!form.checkValidity()) {
          form.classList.add('was-validated');
          return;
        }

        // Prepare message text based on form
        let message = "";
        if (formKey === 'birth') {
          const name = form.name.value.trim();
          const father = form.fatherName.value.trim();
          const mother = form.motherName.value.trim();
          const grandFather = form.grandFatherName.value.trim();
          const dob = form.dob.value;
          const gender = form.querySelector('input[name="gender"]:checked').value;
          message = `*Birth Certificate Form Submission*\n\nName: ${name}\nFather's Name: ${father}\nMother's Name: ${mother}\nGrandfather's Name: ${grandFather}\nGender: ${gender}\nDate of Birth: ${dob}`;
        } else if (formKey === 'certificate') {
          const name = form.name.value.trim();
          const father = form.fatherName.value.trim();
          const mother = form.motherName.value.trim();
          const dob = form.dob.value;
          const passingYear = form.passingYear.value.trim();
          message = `*Certificate Form Submission*\n\nName: ${name}\nFather's Name: ${father}\nMother's Name: ${mother}\nDate of Birth: ${dob}\nPassing Year: ${passingYear}`;
        } else if (formKey === 'address') {
          const name = form.name.value.trim();
          const father = form.fatherName.value.trim();
          const dob = form.dob.value;
          const address = form.address.value.trim();
          const aadhar = form.aadhar.value.trim();
          const phone = form.phone.value.trim();
          // Photo cannot be sent via WhatsApp text, so just mention uploaded
          message = `*Address Document Form Submission*\n\nName: ${name}\nFather's Name: ${father}\nDate of Birth: ${dob}\nAddress: ${address}\nAadhar Number: ${aadhar}\nPhone Number: ${phone}\nPhoto: [Uploaded]`;
        }

        // Encode message for URL
        const encodedMessage = encodeURIComponent(message);

        // WhatsApp URL
        const waUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

        // Open WhatsApp in new tab
        window.open(waUrl, '_blank');

        // Optionally reset form
        form.reset();
        form.classList.remove('was-validated');
      });
    }

    // Navbar link click handler
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const formKey = link.getAttribute('data-form');
        if (!formKey) return;

        // Update active class
        document.querySelectorAll('.nav-link').forEach(nav => nav.classList.remove('active'));
        link.classList.add('active');

        loadForm(formKey);
      });
    });

    // Load default form on page load
    window.addEventListener('DOMContentLoaded', () => {
      loadForm('home');
    });

    // Dark mode toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const icon = darkModeToggle.querySelector('i');

    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
      body.classList.add('dark-mode');
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    }

    // Toggle theme
    darkModeToggle.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
      localStorage.setItem('theme', theme);
      // Toggle icon
      if (theme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
      } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
      }
    });
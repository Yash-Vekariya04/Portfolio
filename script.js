const cliInput = document.getElementById('cli-input');
const logs = document.getElementById('logs');
const terminalBody = document.getElementById('terminal-output');

// Command database using Object literal
const commands = {
  about: `
    <div class="card">
      <h4>Yash Vekariya</h4>
      <p>Integrated BS-MS in Mathematics & Computing @ NIT Agartala.</p>
      <p>Focusing on C++ algorithms, machine learning pipelines, and Linux systems administration.</p>
    </div>`,
  skills: `
    <div class="card">
      <h4>Technical Stack</h4>
      <p><b>Languages:</b> C++, Python, JavaScript, HTML, CSS</p>
      <p><b>Frameworks & ML:</b> FastAPI, PyTorch, Scikit-learn, OpenCV, Pandas</p>
      <p><b>Environment:</b> Arch Linux (Hyprland), Git, ONNX, RKNN</p>
    </div>`,
  projects: `
    <a href="https://yash-vekariya04.github.io/Portfolio/" target="_blank">
        <div class="card">
        <h4>1. Portfolio</h4>
        <p></p>
        </div>
    </a>
    <a href="https://yash-vekariya04.github.io/Portfolio/" target="_blank">
        <div class="card">
        <h4>1. Edge Detection Drone Pipeline</h4>
        <p>YOLOv8 vision pipeline fine-tuned on aerial datasets and deployed via ONNX/RKNN on embedded NPU hardware.</p>
        </div>
    </a>
    <a href="https://yash-vekariya04.github.io/Portfolio/" target="_blank">
        <div class="card">
        <h4>2. AI Crop Recommendation Backend</h4>
        <p>Smart India Hackathon project analyzing soil and climate metrics using Scikit-learn and Pandas.</p>
        </div>
    </a>
    <a href="https://yash-vekariya04.github.io/Portfolio/" target="_blank">
        <div class="card">
        <h4>3. Local Voice Assistant</h4>
        <p>FastAPI WebSocket architecture executing local LLMs with Edge-TTS speech output.</p>
        </div>
    </a>`,
  help: `
    <p>Available commands: <span class="accent">about</span>, <span class="accent">skills</span>, <span class="accent">projects</span>, <span class="accent">clear</span></p>`
};

// Handle CLI text submission
cliInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const cmd = cliInput.value.trim().toLowerCase(); //Trims and stores the value of the cli command in cmd
    runCommand(cmd);
    cliInput.value = ''; //cleaning the input for next command
  }
});


function runCommand(cmd) {
  // if we want to clear the terminal
  if (cmd === 'clear') {
    logs.innerHTML = ''; // clear the logs(div) if it has any entry(div)
    return;
  }

  const entry = document.createElement('div'); // make a div
  entry.className = 'log-entry'; // give the class log-entry to entry(div)

  if (commands[cmd]) { // If comand is there in the dictionary 
    entry.innerHTML = `<p><span class="prompt">yash@arch-linux:~$</span> <span class="cmd">${cmd}</span></p>${commands[cmd]}`;
  } else if (cmd !== '') { // if the comand is not in the dictionary return an error
    entry.innerHTML = `<p><span class="prompt">yash@arch-linux:~$</span> <span class="cmd">${cmd}</span></p><p style="color:#f7768e;">Command not found. Type 'help' for available commands.</p>`;
  }

  logs.appendChild(entry); // we add the entry(div) with its content inside the log(div) inside the html code
  terminalBody.scrollTop = terminalBody.scrollHeight; // scroll down to the last command
}

// Canvas Matrix Rain Visual Effect
const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const chars = '01101001010101';
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = Array.from({ length: columns }).fill(1);

function drawMatrix() {
  ctx.fillStyle = 'rgba(13, 15, 24, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#7aa2f7';
  ctx.font = `${fontSize}px monospace`;

  for (let i = 0; i < drops.length; i++) {
    const text = chars.charAt(Math.floor(Math.random() * chars.length));
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(drawMatrix, 50);

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
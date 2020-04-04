const imgExtensions = [".jpeg", ".jpg", ".png", ".gif"];
const pattern = `(${imgExtensions.join("|").replace(/\./g, "\\.")})$`;
const matchImage = new RegExp(pattern, "i");
const MAX_FILE_SIZE = 5242880;

function isImage(fileName) {
  return matchImage.test(fileName);
}

function readFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = function(e) {
      const dataURL = e.target.result;
      file.dataURL = dataURL.replace(";base64", `;name=${file.name};base64`);
      resolve(file);
    };
    reader.readAsDataURL(file);
  });
}

function processFiles(files) {
  const acceptedFiles = [];
  const rejectedFiles = [];

  Array.from(files).forEach(file => {
    if (!isImage(file.name) || file.size > MAX_FILE_SIZE) {
      rejectedFiles.push(file);
    } else {
      acceptedFiles.push(file);
    }
  });

  return Promise.all(acceptedFiles.map(file => readFile(file)));
}

export { processFiles };

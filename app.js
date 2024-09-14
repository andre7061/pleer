const area = document.querySelector(".drop");

area.addEventListener("dragover", (e) => {
  e.preventDefault();
  e.stopPropagation();
  console.log("!!!");
});

area.addEventListener("drop", (e) => {
  e.preventDefault();
  e.stopPropagation();
  const file = e.dataTransfer.files[0];
  const pleer = document.querySelector(".pleer");
  pleer.src = URL.createObjectURL(file);
  pleer.load();
  document.querySelector(".pleer__span").textContent = file.name;
});

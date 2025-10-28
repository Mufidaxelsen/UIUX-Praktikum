    const imageInput = document.getElementById("imageInput");
    const imagePreview = document.getElementById("imagePreview");
    const imageDataField = document.getElementById("imageData");

    //   imageInput.addEventListener("change", function () {
    //     const file = this.files[0];
    //     if (file) {
    //       const reader = new FileReader();
    //       reader.onload = function (e) {
    //         imagePreview.innerHTML = 
    //          <img src="${e.target.result}" alt="Preview" style="width:100%; height:180px; object-fit:contain;">;
    //         imageDataField.value = e.target.result;
    //       };
    //       reader.readAsDataURL(file);
    //     } else {
    //       imagePreview.innerHTML = "<span>No Image</span>";
    //       imageDataField.value = "";
    //     }
    //   });
    imageInput.addEventListener("change", function () {
        const file = this.files[0];
        if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            imagePreview.innerHTML = `
                <img src="${e.target.result}" alt="Preview" 
                style="width:100%; height:180px; object-fit:contain;">`;
            imageDataField.value = e.target.result;
    };
    reader.readAsDataURL(file);
        } else {
            imagePreview.innerHTML = "<span>No Image</span>";
            imageDataField.value = "";
    }
});

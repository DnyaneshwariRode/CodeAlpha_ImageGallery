// Function to Add Image to the Gallery
function addImage() {
    const imageUrl = document.getElementById("imageUrl").value;

    if (imageUrl.trim() === "") {
        alert("Please enter a valid image URL");
        return;
    }

    const gallery = document.getElementById("gallery");

    const galleryItem = document.createElement("div");
    galleryItem.className = "gallery-item";

    const img = document.createElement("img");
    img.src = imageUrl;
    img.alt = "New Image";
    img.onclick = function () {
        openModal(imageUrl);
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = function () {
        deleteImage(deleteBtn);
    };

    galleryItem.appendChild(img);
    galleryItem.appendChild(deleteBtn);
    gallery.appendChild(galleryItem);

    document.getElementById("imageUrl").value = ""; // Clear input after adding
}

// Function to Delete an Individual Image
function deleteImage(button) {
    button.parentElement.remove();
}

// Function to Delete All Images
function deleteGallery() {
    document.getElementById("gallery").innerHTML = "";
}

// Function to Open Modal
function openModal(imageSrc) {
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("modalImage");
    modal.style.display = "flex";
    modalImg.src = imageSrc;
}

// Function to Close Modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

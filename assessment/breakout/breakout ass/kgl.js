const KGLStore = {
    apples: 50,
    bananas: 30,
    oranges: 40,
    mangoes: 25
};

function updateStock() {
    const produceSelect = document.getElementById("produce");
    const newStockInput = document.getElementById("newStock");
    const stockDisplay = document.getElementById("stockDisplay");
    
    const selectedProduce = produceSelect.value;
    const newStockValue = parseInt(newStockInput.value, 10);
    
    if (!isNaN(newStockValue) && newStockValue >= 0) {
        KGLStore[selectedProduce] = newStockValue;
        stockDisplay.textContent = `Stock for ${selectedProduce}: ${newStockValue}`;
        alert("Stock has been updated successfully!");
    } else {
        alert("Please enter a valid stock value.");
    }
}

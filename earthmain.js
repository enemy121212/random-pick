<script>
    console.log("Этот код работает внутри HTML");
</script>

document.querySelectorAll(".menu-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        console.log("Нажата:", btn.textContent);
    });
});
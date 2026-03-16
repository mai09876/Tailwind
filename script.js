
function revealSecret() {
    const goal = document.getElementById('secretGoal');
    goal.classList.toggle('hidden');
}

const toggleBtn = document.getElementById('themeToggle');
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('bg-slate-900');
    document.body.classList.toggle('bg-black');
    alert("Vibe Checked!");
});
const form = document.getElementById('createServerForm');
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    if(data.serverName.length < 3) return alert('Server name must be at least 3 chars');
    document.getElementById('createBtn').disabled = true;
    document.getElementById('createBtn').textContent = 'Creating...';
    // TODO: POST /api/servers -> { plan, type, version, world, region, name }
    await new Promise(r=>setTimeout(r,1500));
    localStorage.setItem('playverse_last_server', JSON.stringify(data));
    window.location.href = 'servers.html';
});

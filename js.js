document.addEventListener('DOMContentLoaded', () => {
    // Lấy tất cả các playlist cards
    const playlistCards = document.querySelectorAll('.playlist-card');

    // Thêm hiệu ứng hover để làm cho các playlist có chút hiệu ứng tương tác
    playlistCards.forEach(card => {
        // Hover để phóng to và làm sáng lên
        card.addEventListener('mouseover', () => {
            card.style.transform = 'scale(1.1)';
            card.style.boxShadow = '0px 8px 16px rgba(0, 0, 0, 0.3)';
            card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        });

        // Khi rời chuột khỏi card, trả về trạng thái cũ
        card.addEventListener('mouseout', () => {
            card.style.transform = 'scale(1)';
            card.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.2)';
        });

        // Thêm sự kiện click để mở một modal hoặc thay đổi giao diện
        card.addEventListener('click', () => {
            const playlistTitle = card.querySelector('.playlist-title').textContent;
            showPlaylistDetails(playlistTitle);
        });
    });

    // Hàm hiển thị chi tiết playlist khi click vào một playlist
    function showPlaylistDetails(playlistTitle) {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        
        // Tạo nội dung cho modal
        modal.innerHTML = `
            <div class="modal-content">
                <h2>Playlist: ${playlistTitle}</h2>
                <p>Đây là thông tin chi tiết về playlist '${playlistTitle}'. Bạn có thể thêm mô tả hoặc các hành động khác ở đây.</p>
                <button class="close-btn">Close</button>
            </div>
        `;
        

        // Thêm modal vào body
        document.body.appendChild(modal);

        // Thêm sự kiện để đóng modal
        modal.querySelector('.close-btn').addEventListener('click', () => {
            modal.remove();
        });
    }

    // Chức năng tải danh sách playlist từ một API giả lập (hoặc từ dữ liệu động)
   /* const playlists = [
        { title: "Today's Top Hits", image: "./DenVau.jpg" },
        { title: "RapCaviar", image: "https://via.placeholder.com/150" },
        { title: "All out 2010s", image: "https://via.placeholder.com/150" },
        { title: "Rock Classics", image: "https://via.placeholder.com/150" },
        { title: "Chill Hits", image: "https://via.placeholder.com/150" },
        { title: "Deep Focus", image: "https://via.placeholder.com/150" },
        { title: "Instrumental Study", image: "https://via.placeholder.com/150" },
        { title: "Focus Flow", image: "https://via.placeholder.com/150" },
        { title: "Reading Adventure", image: "https://via.placeholder.com/150" },
    ];*/

    // Tạo các playlist động từ dữ liệu
    const playlistContainer = document.querySelector('.playlist-container');
    playlists.forEach(playlist => {
        const card = document.createElement('div');
        card.classList.add('playlist-card');
        card.innerHTML = `
            <img src="${playlist.image}" alt="Playlist Image">
            <div class="playlist-title">${playlist.title}</div>
        `;
        playlistContainer.appendChild(card);
    });
});

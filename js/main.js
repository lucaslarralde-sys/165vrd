
    (function () {
      const modal = document.getElementById('galleryModal');
      const modalImg = modal.querySelector('.modal-img');
      const btnClose = modal.querySelector('.modal-close');
      const btnPrev = modal.querySelector('.modal-nav.prev');
      const btnNext = modal.querySelector('.modal-nav.next');
      let currentGroup = []; let idx = 0;
      function openModal(group, startIndex){ currentGroup = group; idx = startIndex; modalImg.src = currentGroup[idx].src; modal.classList.add('open'); modal.setAttribute('aria-hidden','false'); }
      function closeModal(){ modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); modalImg.src=''; }
      function show(delta){ if(!currentGroup.length) return; idx=(idx+delta+currentGroup.length)%currentGroup.length; modalImg.src=currentGroup[idx].src; }
      document.addEventListener('click',(e)=>{ const img=e.target.closest('.thumbs img'); if(!img) return; const thumbs=img.closest('.thumbs'); const images=[...thumbs.querySelectorAll('img')]; const start=images.indexOf(img); openModal(images,start); });
      btnClose.addEventListener('click', closeModal);
      btnPrev.addEventListener('click', ()=>show(-1));
      btnNext.addEventListener('click', ()=>show(1));
      modal.addEventListener('click',(e)=>{ if(e.target===modal) closeModal(); });
      document.addEventListener('keydown',(e)=>{ if(!modal.classList.contains('open')) return; if(e.key==='Escape') closeModal(); if(e.key==='ArrowRight') show(1); if(e.key==='ArrowLeft') show(-1); });
      document.getElementById('y').textContent = new Date().getFullYear();
    })();
    
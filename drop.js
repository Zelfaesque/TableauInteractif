        // Récupération de la table
        const table = document.getElementById('tableau');
        let dragStartIndex;

        // Fonction de gestion du début du drag
        function handleDragStart(e) {
            dragStartIndex = [...this.parentNode.children].indexOf(this);
        }

        // Fonction de gestion du drop
        function handleDrop(e) {
            e.preventDefault();
            const dragEndIndex = [...this.parentNode.children].indexOf(this);

            // Déplacement des colonnes
            moveColumn(dragStartIndex, dragEndIndex);
        }

        // Fonction pour déplacer une colonne (entête et contenu)
        function moveColumn(fromIndex, toIndex) {
            const rows = table.querySelectorAll('tr');

            rows.forEach(row => {
                const cells = row.querySelectorAll('th, td');
                // Déplacer la cellule
                if (fromIndex < toIndex) {
                    row.insertBefore(cells[fromIndex], cells[toIndex + 1]);
                } else {
                    row.insertBefore(cells[fromIndex], cells[toIndex]);
                }
            });
        }

        // Ajouter des événements de drag-and-drop sur les entêtes
        const headers = table.querySelectorAll('th');
        headers.forEach(header => {
            header.setAttribute('draggable', true);
            header.addEventListener('dragstart', handleDragStart);
            header.addEventListener('drop', handleDrop);
            header.addEventListener('dragover', e => e.preventDefault());
        });

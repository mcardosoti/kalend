// Função para adicionar um evento
function addEvent() {
  const title = document.getElementById("event-title").value;
  const date = document.getElementById("event-date").value;

  if (title && date) {
    events.push({ title, date });
    saveEventsToLocalStorage(); // Salva o evento no Local Storage
    updateEventList();
    clearEventForm();
  }
}

// Função para salvar eventos no Local Storage
function saveEventsToLocalStorage() {
  localStorage.setItem('events', JSON.stringify(events));
}

// Função para carregar eventos do Local Storage
function loadEventsFromLocalStorage() {
  const storedEvents = JSON.parse(localStorage.getItem('events'));
  if (storedEvents) {
    events.push(...storedEvents);
    updateEventList();
  }
}

// Carregue os eventos do Local Storage ao carregar a página
loadEventsFromLocalStorage();


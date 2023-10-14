
// Array para armazenar os eventos
const events = [];

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

// Função para listar os eventos
function updateEventList() {
  const eventsList = document.getElementById("events");
  eventsList.innerHTML = "";

  for (const event of events) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `${event.title} - ${event.date}`;
    eventsList.appendChild(listItem);
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

// Função para limpar o formulário
function clearEventForm() {
  document.getElementById("event-title").value = "";
  document.getElementById("event-date").value = "";
}

// Carregue os eventos do Local Storage ao carregar a página
loadEventsFromLocalStorage();


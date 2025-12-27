    // Sample data for the application
        const sampleData = {
            equipment: [
                {
                    id: 1,
                    name: "CNC Machine",
                    serial: "SN-2022-001",
                    category: "production",
                    team: "mechanics",
                    purchaseDate: "2022-03-15",
                    warranty: "2024-03-15",
                    location: "Production Area A",
                    assignedTo: "john-doe",
                    requests: 2
                },
                {
                    id: 2,
                    name: "Laptop - Dell XPS",
                    serial: "SN-2023-005",
                    category: "it",
                    team: "it-support",
                    purchaseDate: "2023-01-20",
                    warranty: "2025-01-20",
                    location: "Office Floor 3",
                    assignedTo: "jane-smith",
                    requests: 1
                },
                {
                    id: 3,
                    name: "Forklift",
                    serial: "SN-2021-012",
                    category: "vehicle",
                    team: "mechanics",
                    purchaseDate: "2021-08-10",
                    warranty: "2023-08-10",
                    location: "Warehouse",
                    assignedTo: "mike-johnson",
                    requests: 3
                },
                {
                    id: 4,
                    name: "Industrial Printer",
                    serial: "SN-2022-008",
                    category: "production",
                    team: "electricians",
                    purchaseDate: "2022-06-05",
                    warranty: "2024-06-05",
                    location: "Packaging Department",
                    assignedTo: "",
                    requests: 0
                },
                {
                    id: 5,
                    name: "HVAC System",
                    serial: "SN-2020-003",
                    category: "facility",
                    team: "general",
                    purchaseDate: "2020-11-30",
                    warranty: "2023-11-30",
                    location: "Main Building",
                    assignedTo: "",
                    requests: 1
                },
                {
                    id: 6,
                    name: "Server Rack",
                    serial: "SN-2023-002",
                    category: "it",
                    team: "it-support",
                    purchaseDate: "2023-02-14",
                    warranty: "2026-02-14",
                    location: "Server Room",
                    assignedTo: "sarah-williams",
                    requests: 2
                }
            ],
            
            maintenanceRequests: [
                {
                    id: 1,
                    subject: "Leaking Oil",
                    equipmentId: 1,
                    equipmentName: "CNC Machine",
                    type: "corrective",
                    team: "mechanics",
                    scheduledDate: "2023-06-10",
                    duration: 2.5,
                    description: "Noticed oil leakage from the main hydraulic unit. Needs immediate attention.",
                    status: "in-progress",
                    assignedTo: "john-doe",
                    createdDate: "2023-06-09",
                    overdue: true
                },
                {
                    id: 2,
                    subject: "Routine Checkup",
                    equipmentId: 3,
                    equipmentName: "Forklift",
                    type: "preventive",
                    team: "mechanics",
                    scheduledDate: "2023-06-15",
                    duration: 1.5,
                    description: "Monthly inspection of brakes, hydraulics, and battery.",
                    status: "new",
                    assignedTo: "",
                    createdDate: "2023-06-01",
                    overdue: false
                },
                {
                    id: 3,
                    subject: "Keyboard Not Working",
                    equipmentId: 2,
                    equipmentName: "Laptop - Dell XPS",
                    type: "corrective",
                    team: "it-support",
                    scheduledDate: "2023-06-12",
                    duration: 0.5,
                    description: "Several keys on the keyboard are unresponsive.",
                    status: "repaired",
                    assignedTo: "jane-smith",
                    createdDate: "2023-06-05",
                    overdue: false
                },
                {
                    id: 4,
                    subject: "Annual Service",
                    equipmentId: 5,
                    equipmentName: "HVAC System",
                    type: "preventive",
                    team: "general",
                    scheduledDate: "2023-06-20",
                    duration: 4,
                    description: "Complete annual maintenance including filter replacement and coolant check.",
                    status: "new",
                    assignedTo: "",
                    createdDate: "2023-05-28",
                    overdue: false
                },
                {
                    id: 5,
                    subject: "Server Backup Check",
                    equipmentId: 6,
                    equipmentName: "Server Rack",
                    type: "preventive",
                    team: "it-support",
                    scheduledDate: "2023-06-05",
                    duration: 2,
                    description: "Verify all backup systems are functioning correctly.",
                    status: "in-progress",
                    assignedTo: "sarah-williams",
                    createdDate: "2023-05-30",
                    overdue: true
                },
                {
                    id: 6,
                    subject: "Calibration Required",
                    equipmentId: 1,
                    equipmentName: "CNC Machine",
                    type: "preventive",
                    team: "mechanics",
                    scheduledDate: "2023-06-25",
                    duration: 3,
                    description: "Quarterly calibration of cutting tools and measurements.",
                    status: "new",
                    assignedTo: "",
                    createdDate: "2023-06-10",
                    overdue: false
                },
                {
                    id: 7,
                    subject: "Electrical Fault",
                    equipmentId: 4,
                    equipmentName: "Industrial Printer",
                    type: "corrective",
                    team: "electricians",
                    scheduledDate: "2023-06-08",
                    duration: 1.5,
                    description: "Printer trips circuit breaker when powered on.",
                    status: "repaired",
                    assignedTo: "mike-johnson",
                    createdDate: "2023-06-07",
                    overdue: false
                }
            ],
            
            teams: [
                { id: "mechanics", name: "Mechanics", color: "#3498db", members: 3 },
                { id: "electricians", name: "Electricians", color: "#e74c3c", members: 2 },
                { id: "it-support", name: "IT Support", color: "#27ae60", members: 4 },
                { id: "general", name: "General Maintenance", color: "#f39c12", members: 2 }
            ],
            
            employees: [
                { id: "john-doe", name: "John Doe", team: "mechanics" },
                { id: "jane-smith", name: "Jane Smith", team: "it-support" },
                { id: "mike-johnson", name: "Mike Johnson", team: "electricians" },
                { id: "sarah-williams", name: "Sarah Williams", team: "it-support" }
            ]
        };

        // Application state
        let state = {
            equipment: [...sampleData.equipment],
            maintenanceRequests: [...sampleData.maintenanceRequests],
            teams: [...sampleData.teams],
            employees: [...sampleData.employees],
            currentMonth: new Date().getMonth(),
            currentYear: new Date().getFullYear()
        };

        // DOM Elements
        const kanbanBoard = document.getElementById('kanban-board');
        const equipmentList = document.getElementById('equipment-list');
        const calendarGrid = document.getElementById('calendar-grid');
        const currentMonthElement = document.getElementById('current-month');
        const requestModal = document.getElementById('request-modal');
        const equipmentModal = document.getElementById('equipment-modal');
        const detailsModal = document.getElementById('details-modal');
        const requestForm = document.getElementById('request-form');
        const equipmentForm = document.getElementById('equipment-form');
        const requestEquipmentSelect = document.getElementById('request-equipment');
        const tabButtons = document.querySelectorAll('.tab-btn');
        const navLinks = document.querySelectorAll('.main-nav a');
        const stats = {
            totalEquipment: document.getElementById('total-equipment'),
            openRequests: document.getElementById('open-requests'),
            preventiveScheduled: document.getElementById('preventive-scheduled'),
            teamsCount: document.getElementById('teams-count')
        };

        // Initialize the application
        function init() {
            updateStats();
            renderKanbanBoard();
            renderEquipmentList();
            renderCalendar();
            renderCharts();
            setupEventListeners();
            populateEquipmentSelect();
        }

        // Update statistics
        function updateStats() {
            stats.totalEquipment.textContent = state.equipment.length;
            
            const openRequests = state.maintenanceRequests.filter(req => 
                req.status === 'new' || req.status === 'in-progress'
            ).length;
            stats.openRequests.textContent = openRequests;
            
            const preventiveRequests = state.maintenanceRequests.filter(req => 
                req.type === 'preventive' && (req.status === 'new' || req.status === 'in-progress')
            ).length;
            stats.preventiveScheduled.textContent = preventiveRequests;
            
            stats.teamsCount.textContent = state.teams.length;
        }

        // Render Kanban board
        function renderKanbanBoard() {
            const stages = [
                { id: 'new', title: 'New', color: '#3498db' },
                { id: 'in-progress', title: 'In Progress', color: '#f39c12' },
                { id: 'repaired', title: 'Repaired', color: '#27ae60' },
                { id: 'scrap', title: 'Scrap', color: '#7f8c8d' }
            ];
            
            kanbanBoard.innerHTML = '';
            
            stages.forEach(stage => {
                const column = document.createElement('div');
                column.className = 'kanban-column';
                column.dataset.stage = stage.id;
                
                const columnRequests = state.maintenanceRequests.filter(req => req.status === stage.id);
                
                column.innerHTML = `
                    <div class="column-header">
                        <div class="column-title">${stage.title}</div>
                        <div class="request-count">${columnRequests.length}</div>
                    </div>
                    <div class="request-list" id="${stage.id}-list">
                        ${columnRequests.map(request => renderRequestCard(request)).join('')}
                    </div>
                `;
                
                kanbanBoard.appendChild(column);
            });
            
            // Make cards draggable
            setupDragAndDrop();
        }

        // Render a single request card
        function renderRequestCard(request) {
            const equipment = state.equipment.find(eq => eq.id === request.equipmentId);
            const assignedEmployee = state.employees.find(emp => emp.id === request.assignedTo);
            const isOverdue = request.overdue && request.status !== 'repaired' && request.status !== 'scrap';
            
            return `
                <div class="request-card ${isOverdue ? 'overdue' : ''}" data-id="${request.id}" draggable="true">
                    <div class="card-header">
                        <span class="request-type ${request.type}">${request.type === 'corrective' ? 'Corrective' : 'Preventive'}</span>
                        <small>#${request.id}</small>
                    </div>
                    <div class="card-body">
                        <h4>${request.subject}</h4>
                        <div class="card-details">
                            <div class="card-detail">
                                <i class="fas fa-cogs"></i>
                                <span>${request.equipmentName}</span>
                            </div>
                            <div class="card-detail">
                                <i class="fas fa-calendar-alt"></i>
                                <span>${formatDate(request.scheduledDate)}</span>
                            </div>
                            <div class="card-detail">
                                <i class="fas fa-clock"></i>
                                <span>${request.duration} hours</span>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer">
                        <div class="assigned-to">
                            ${assignedEmployee ? `
                                <div class="avatar-small">${getInitials(assignedEmployee.name)}</div>
                                <span>${assignedEmployee.name}</span>
                            ` : '<span>Unassigned</span>'}
                        </div>
                        <button class="btn btn-secondary view-details" data-id="${request.id}" style="padding: 5px 10px; font-size: 0.8rem;">View</button>
                    </div>
                </div>
            `;
        }

        // Render equipment list
        function renderEquipmentList() {
            equipmentList.innerHTML = state.equipment.map(equipment => {
                const assignedEmployee = state.employees.find(emp => emp.id === equipment.assignedTo);
                const team = state.teams.find(t => t.id === equipment.team);
                const openRequests = state.maintenanceRequests.filter(req => 
                    req.equipmentId === equipment.id && (req.status === 'new' || req.status === 'in-progress')
                ).length;
                
                return `
                    <div class="equipment-card">
                        <div class="equipment-header">
                            <div class="equipment-name">${equipment.name}</div>
                            <button class="maintenance-btn" data-id="${equipment.id}">
                                Maintenance
                                ${openRequests > 0 ? `<span class="request-badge">${openRequests}</span>` : ''}
                            </button>
                        </div>
                        <div class="equipment-details">
                            <div class="detail-row">
                                <span class="detail-label">Serial Number:</span>
                                <span>${equipment.serial}</span>
                            </div>
                            <div class="detail-row">
                                <span class="detail-label">Category:</span>
                                <span>${formatCategory(equipment.category)}</span>
                            </div>
                            <div class="detail-row">
                                <span class="detail-label">Team:</span>
                                <span>${team ? team.name : equipment.team}</span>
                            </div>
                            <div class="detail-row">
                                <span class="detail-label">Location:</span>
                                <span>${equipment.location}</span>
                            </div>
                            <div class="detail-row">
                                <span class="detail-label">Assigned To:</span>
                                <span>${assignedEmployee ? assignedEmployee.name : 'Unassigned'}</span>
                            </div>
                        </div>
                        <div class="form-actions" style="margin-top: 0;">
                            <button class="btn btn-secondary view-equipment-requests" data-id="${equipment.id}" style="padding: 8px 15px;">
                                View Requests (${equipment.requests})
                            </button>
                        </div>
                    </div>
                `;
            }).join('');
        }

        // Render calendar
        function renderCalendar() {
            const monthNames = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"];
            
            currentMonthElement.textContent = `${monthNames[state.currentMonth]} ${state.currentYear}`;
            
            // Get first day of month and total days
            const firstDay = new Date(state.currentYear, state.currentMonth, 1).getDay();
            const daysInMonth = new Date(state.currentYear, state.currentMonth + 1, 0).getDate();
            
            // Day headers
            const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            
            calendarGrid.innerHTML = '';
            
            // Add day headers
            dayNames.forEach(day => {
                const dayHeader = document.createElement('div');
                dayHeader.className = 'calendar-day-header';
                dayHeader.textContent = day;
                calendarGrid.appendChild(dayHeader);
            });
            
            // Add empty cells for days before the first day of the month
            for (let i = 0; i < firstDay; i++) {
                const emptyDay = document.createElement('div');
                emptyDay.className = 'calendar-day';
                calendarGrid.appendChild(emptyDay);
            }
            
            // Add days of the month
            for (let day = 1; day <= daysInMonth; day++) {
                const dayElement = document.createElement('div');
                dayElement.className = 'calendar-day';
                dayElement.dataset.date = `${state.currentYear}-${String(state.currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                
                // Check if current day is today
                const today = new Date();
                const isToday = day === today.getDate() && 
                    state.currentMonth === today.getMonth() && 
                    state.currentYear === today.getFullYear();
                
                dayElement.innerHTML = `
                    <div class="day-number ${isToday ? 'today' : ''}">${day}${isToday ? ' (Today)' : ''}</div>
                `;
                
                // Add events for this day
                const dateStr = `${state.currentYear}-${String(state.currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                const dayEvents = state.maintenanceRequests.filter(req => 
                    req.scheduledDate === dateStr && req.type === 'preventive'
                );
                
                dayEvents.forEach(event => {
                    const eventElement = document.createElement('div');
                    eventElement.className = 'calendar-event';
                    eventElement.textContent = `${event.equipmentName}: ${event.subject}`;
                    eventElement.dataset.id = event.id;
                    dayElement.appendChild(eventElement);
                });
                
                calendarGrid.appendChild(dayElement);
            }
        }

        // Render charts for reports
        function renderCharts() {
            // Requests by team
            const teamChart = document.getElementById('team-chart');
            teamChart.innerHTML = '';
            
            const teamRequests = {};
            state.teams.forEach(team => {
                teamRequests[team.id] = state.maintenanceRequests.filter(req => req.team === team.id).length;
            });
            
            const maxTeamRequests = Math.max(...Object.values(teamRequests));
            
            state.teams.forEach(team => {
                const barHeight = (teamRequests[team.id] / maxTeamRequests) * 240;
                const bar = document.createElement('div');
                bar.style.cssText = `
                    flex: 1;
                    margin: 0 5px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                `;
                
                bar.innerHTML = `
                    <div style="height: ${barHeight}px; background-color: ${team.color}; width: 60%; border-radius: 4px 4px 0 0;"></div>
                    <div style="margin-top: 10px; font-weight: 500;">${team.name}</div>
                    <div style="font-size: 0.9rem; color: #666;">${teamRequests[team.id]} requests</div>
                `;
                
                teamChart.appendChild(bar);
            });
            
            // Requests by equipment category
            const equipmentChart = document.getElementById('equipment-chart');
            equipmentChart.innerHTML = '';
            
            const categoryRequests = {};
            state.equipment.forEach(eq => {
                if (!categoryRequests[eq.category]) {
                    categoryRequests[eq.category] = 0;
                }
                categoryRequests[eq.category] += state.maintenanceRequests.filter(req => req.equipmentId === eq.id).length;
            });
            
            const categories = Object.keys(categoryRequests);
            const maxCategoryRequests = Math.max(...Object.values(categoryRequests));
            const categoryColors = {
                production: '#3498db',
                it: '#27ae60',
                vehicle: '#e74c3c',
                facility: '#f39c12'
            };
            
            categories.forEach(category => {
                const barHeight = (categoryRequests[category] / maxCategoryRequests) * 240;
                const bar = document.createElement('div');
                bar.style.cssText = `
                    flex: 1;
                    margin: 0 5px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                `;
                
                bar.innerHTML = `
                    <div style="height: ${barHeight}px; background-color: ${categoryColors[category] || '#7f8c8d'}; width: 60%; border-radius: 4px 4px 0 0;"></div>
                    <div style="margin-top: 10px; font-weight: 500;">${formatCategory(category)}</div>
                    <div style="font-size: 0.9rem; color: #666;">${categoryRequests[category]} requests</div>
                `;
                
                equipmentChart.appendChild(bar);
            });
        }

        // Setup drag and drop functionality
        function setupDragAndDrop() {
            const cards = document.querySelectorAll('.request-card');
            const columns = document.querySelectorAll('.kanban-column');
            
            cards.forEach(card => {
                card.addEventListener('dragstart', dragStart);
            });
            
            columns.forEach(column => {
                column.addEventListener('dragover', dragOver);
                column.addEventListener('drop', drop);
            });
        }
        
        function dragStart(e) {
            e.dataTransfer.setData('text/plain', e.target.dataset.id);
        }
        
        function dragOver(e) {
            e.preventDefault();
        }
        
        function drop(e) {
            e.preventDefault();
            const requestId = parseInt(e.dataTransfer.getData('text/plain'));
            const column = e.target.closest('.kanban-column');
            const newStatus = column.dataset.stage;
            
            // Update request status
            const requestIndex = state.maintenanceRequests.findIndex(req => req.id === requestId);
            if (requestIndex !== -1) {
                state.maintenanceRequests[requestIndex].status = newStatus;
                
                // If moved to scrap, mark equipment as unusable
                if (newStatus === 'scrap') {
                    const request = state.maintenanceRequests[requestIndex];
                    const equipmentIndex = state.equipment.findIndex(eq => eq.id === request.equipmentId);
                    if (equipmentIndex !== -1) {
                        // In a real app, we would set a flag on the equipment
                        console.log(`Equipment ${request.equipmentName} marked as unusable due to scrap request`);
                    }
                }
                
                updateStats();
                renderKanbanBoard();
                renderEquipmentList();
            }
        }

        // Setup event listeners
        function setupEventListeners() {
            // Tab navigation
            tabButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const tabId = button.dataset.tab;
                    
                    // Update active tab button
                    tabButtons.forEach(btn => btn.classList.remove('active'));
                    button.classList.add('active');
                    
                    // Show corresponding tab content
                    document.querySelectorAll('.tab-content').forEach(content => {
                        content.classList.remove('active');
                    });
                    document.getElementById(`${tabId}-tab`).classList.add('active');
                    
                    // Update navigation
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.dataset.tab === tabId) {
                            link.classList.add('active');
                        }
                    });
                });
            });
            
            // Navigation links
            navLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const tabId = link.dataset.tab;
                    
                    // Update active navigation link
                    navLinks.forEach(navLink => navLink.classList.remove('active'));
                    link.classList.add('active');
                    
                    // Update active tab button and content
                    tabButtons.forEach(btn => {
                        btn.classList.remove('active');
                        if (btn.dataset.tab === tabId) {
                            btn.classList.add('active');
                        }
                    });
                    
                    document.querySelectorAll('.tab-content').forEach(content => {
                        content.classList.remove('active');
                    });
                    document.getElementById(`${tabId}-tab`).classList.add('active');
                });
            });
            
            // Create request button
            document.getElementById('create-request-btn').addEventListener('click', () => {
                requestModal.classList.add('active');
            });
            
            // Add equipment button
            document.getElementById('add-equipment-btn').addEventListener('click', () => {
                equipmentModal.classList.add('active');
            });
            
            // Close modals
            document.getElementById('close-request-modal').addEventListener('click', () => {
                requestModal.classList.remove('active');
                requestForm.reset();
            });
            
            document.getElementById('close-equipment-modal').addEventListener('click', () => {
                equipmentModal.classList.remove('active');
                equipmentForm.reset();
            });
            
            document.getElementById('close-details-modal').addEventListener('click', () => {
                detailsModal.classList.remove('active');
            });
            
            document.getElementById('cancel-request').addEventListener('click', () => {
                requestModal.classList.remove('active');
                requestForm.reset();
            });
            
            document.getElementById('cancel-equipment').addEventListener('click', () => {
                equipmentModal.classList.remove('active');
                equipmentForm.reset();
            });
            
            // Submit request form
            requestForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                const subject = document.getElementById('request-subject').value;
                const type = document.getElementById('request-type').value;
                const equipmentId = parseInt(document.getElementById('request-equipment').value);
                const scheduledDate = document.getElementById('request-date').value;
                const duration = parseFloat(document.getElementById('request-duration').value) || 0;
                const description = document.getElementById('request-description').value;
                
                // Find selected equipment
                const equipment = state.equipment.find(eq => eq.id === equipmentId);
                
                // Create new request
                const newRequest = {
                    id: state.maintenanceRequests.length + 1,
                    subject,
                    equipmentId,
                    equipmentName: equipment ? equipment.name : 'Unknown Equipment',
                    type,
                    team: equipment ? equipment.team : 'general',
                    scheduledDate: scheduledDate || new Date().toISOString().split('T')[0],
                    duration,
                    description,
                    status: 'new',
                    assignedTo: '',
                    createdDate: new Date().toISOString().split('T')[0],
                    overdue: false
                };
                
                // Add to state
                state.maintenanceRequests.push(newRequest);
                
                // Update equipment request count
                const equipmentIndex = state.equipment.findIndex(eq => eq.id === equipmentId);
                if (equipmentIndex !== -1) {
                    state.equipment[equipmentIndex].requests += 1;
                }
                
                // Update UI
                updateStats();
                renderKanbanBoard();
                renderEquipmentList();
                renderCalendar();
                renderCharts();
                
                // Close modal and reset form
                requestModal.classList.remove('active');
                requestForm.reset();
                
                alert('Maintenance request created successfully!');
            });
            
            // Submit equipment form
            equipmentForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                const name = document.getElementById('equipment-name').value;
                const serial = document.getElementById('equipment-serial').value;
                const category = document.getElementById('equipment-category').value;
                const team = document.getElementById('equipment-team').value;
                const purchaseDate = document.getElementById('equipment-purchase').value;
                const warranty = document.getElementById('equipment-warranty').value;
                const location = document.getElementById('equipment-location').value;
                const assignedTo = document.getElementById('equipment-assigned').value;
                
                // Create new equipment
                const newEquipment = {
                    id: state.equipment.length + 1,
                    name,
                    serial,
                    category,
                    team,
                    purchaseDate,
                    warranty,
                    location,
                    assignedTo,
                    requests: 0
                };
                
                // Add to state
                state.equipment.push(newEquipment);
                
                // Update UI
                updateStats();
                renderEquipmentList();
                populateEquipmentSelect();
                renderCharts();
                
                // Close modal and reset form
                equipmentModal.classList.remove('active');
                equipmentForm.reset();
                
                alert('Equipment added successfully!');
            });
            
            // Calendar navigation
            document.getElementById('prev-month').addEventListener('click', () => {
                state.currentMonth -= 1;
                if (state.currentMonth < 0) {
                    state.currentMonth = 11;
                    state.currentYear -= 1;
                }
                renderCalendar();
            });
            
            document.getElementById('next-month').addEventListener('click', () => {
                state.currentMonth += 1;
                if (state.currentMonth > 11) {
                    state.currentMonth = 0;
                    state.currentYear += 1;
                }
                renderCalendar();
            });
            
            document.getElementById('today-btn').addEventListener('click', () => {
                const today = new Date();
                state.currentMonth = today.getMonth();
                state.currentYear = today.getFullYear();
                renderCalendar();
            });
            
            // Event delegation for dynamic elements
            document.addEventListener('click', (e) => {
                // View request details
                if (e.target.classList.contains('view-details') || e.target.closest('.view-details')) {
                    const button = e.target.classList.contains('view-details') ? e.target : e.target.closest('.view-details');
                    const requestId = parseInt(button.dataset.id);
                    showRequestDetails(requestId);
                }
                
                // View equipment requests
                if (e.target.classList.contains('view-equipment-requests') || e.target.closest('.view-equipment-requests')) {
                    const button = e.target.classList.contains('view-equipment-requests') ? e.target : e.target.closest('.view-equipment-requests');
                    const equipmentId = parseInt(button.dataset.id);
                    showEquipmentRequests(equipmentId);
                }
                
                // Maintenance button on equipment card
                if (e.target.classList.contains('maintenance-btn') || e.target.closest('.maintenance-btn')) {
                    const button = e.target.classList.contains('maintenance-btn') ? e.target : e.target.closest('.maintenance-btn');
                    const equipmentId = parseInt(button.dataset.id);
                    openRequestModalForEquipment(equipmentId);
                }
                
                // Calendar events
                if (e.target.classList.contains('calendar-event')) {
                    const requestId = parseInt(e.target.dataset.id);
                    showRequestDetails(requestId);
                }
            });
            
            // Close modals when clicking outside
            window.addEventListener('click', (e) => {
                if (e.target.classList.contains('modal')) {
                    e.target.classList.remove('active');
                    requestForm.reset();
                    equipmentForm.reset();
                }
            });
        }

        // Populate equipment select in request form
        function populateEquipmentSelect() {
            requestEquipmentSelect.innerHTML = '<option value="">Select equipment</option>';
            
            state.equipment.forEach(equipment => {
                const option = document.createElement('option');
                option.value = equipment.id;
                option.textContent = equipment.name;
                requestEquipmentSelect.appendChild(option);
            });
        }

        // Show request details in modal
        function showRequestDetails(requestId) {
            const request = state.maintenanceRequests.find(req => req.id === requestId);
            if (!request) return;
            
            const equipment = state.equipment.find(eq => eq.id === request.equipmentId);
            const assignedEmployee = state.employees.find(emp => emp.id === request.assignedTo);
            const team = state.teams.find(t => t.id === request.team);
            
            const detailsContent = document.getElementById('details-content');
            detailsContent.innerHTML = `
                <div style="margin-bottom: 25px;">
                    <h4 style="color: var(--primary-color); margin-bottom: 10px;">${request.subject}</h4>
                    <div style="display: flex; gap: 15px; margin-bottom: 15px;">
                        <span class="request-type ${request.type}" style="display: inline-block;">${request.type === 'corrective' ? 'Corrective' : 'Preventive'}</span>
                        <span style="background-color: #e9ecef; padding: 3px 10px; border-radius: 20px; font-size: 0.9rem;">${request.status.toUpperCase()}</span>
                    </div>
                </div>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 25px;">
                    <div>
                        <h5 style="margin-bottom: 10px; color: #666;">Equipment Details</h5>
                        <div style="display: flex; flex-direction: column; gap: 8px;">
                            <div><strong>Name:</strong> ${request.equipmentName}</div>
                            <div><strong>Team:</strong> ${team ? team.name : request.team}</div>
                            <div><strong>Location:</strong> ${equipment ? equipment.location : 'Unknown'}</div>
                        </div>
                    </div>
                    
                    <div>
                        <h5 style="margin-bottom: 10px; color: #666;">Request Details</h5>
                        <div style="display: flex; flex-direction: column; gap: 8px;">
                            <div><strong>Scheduled Date:</strong> ${formatDate(request.scheduledDate)}</div>
                            <div><strong>Duration:</strong> ${request.duration} hours</div>
                            <div><strong>Created:</strong> ${formatDate(request.createdDate)}</div>
                            <div><strong>Assigned To:</strong> ${assignedEmployee ? assignedEmployee.name : 'Unassigned'}</div>
                        </div>
                    </div>
                </div>
                
                <div style="margin-bottom: 25px;">
                    <h5 style="margin-bottom: 10px; color: #666;">Description</h5>
                    <p style="background-color: #f8f9fa; padding: 15px; border-radius: var(--border-radius);">${request.description}</p>
                </div>
                
                <div class="form-actions">
                    <button class="btn btn-primary" id="assign-to-me-btn" data-id="${request.id}" ${request.assignedTo ? 'disabled' : ''}>
                        ${request.assignedTo ? 'Already Assigned' : 'Assign to Me'}
                    </button>
                    <button class="btn btn-secondary" id="close-details">Close</button>
                </div>
            `;
            
            detailsModal.classList.add('active');
            
            // Add event listener for assign button
            document.getElementById('assign-to-me-btn').addEventListener('click', () => {
                const requestIndex = state.maintenanceRequests.findIndex(req => req.id === requestId);
                if (requestIndex !== -1) {
                    state.maintenanceRequests[requestIndex].assignedTo = 'john-doe'; // Current user
                    state.maintenanceRequests[requestIndex].status = 'in-progress';
                    
                    updateStats();
                    renderKanbanBoard();
                    showRequestDetails(requestId);
                }
            });
            
            document.getElementById('close-details').addEventListener('click', () => {
                detailsModal.classList.remove('active');
            });
        }

        // Show equipment requests
        function showEquipmentRequests(equipmentId) {
            const equipment = state.equipment.find(eq => eq.id === equipmentId);
            if (!equipment) return;
            
            const equipmentRequests = state.maintenanceRequests.filter(req => req.equipmentId === equipmentId);
            
            const detailsContent = document.getElementById('details-content');
            detailsContent.innerHTML = `
                <div style="margin-bottom: 25px;">
                    <h4 style="color: var(--primary-color); margin-bottom: 5px;">${equipment.name}</h4>
                    <p style="color: #666;">All maintenance requests for this equipment</p>
                </div>
                
                <div style="margin-bottom: 25px;">
                    <h5 style="margin-bottom: 15px; color: #666;">Equipment Details</h5>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                        <div><strong>Serial:</strong> ${equipment.serial}</div>
                        <div><strong>Category:</strong> ${formatCategory(equipment.category)}</div>
                        <div><strong>Location:</strong> ${equipment.location}</div>
                        <div><strong>Purchase Date:</strong> ${formatDate(equipment.purchaseDate)}</div>
                    </div>
                </div>
                
                <div style="margin-bottom: 25px;">
                    <h5 style="margin-bottom: 15px; color: #666;">Maintenance Requests (${equipmentRequests.length})</h5>
                    ${equipmentRequests.length > 0 ? 
                        `<div style="display: flex; flex-direction: column; gap: 10px;">
                            ${equipmentRequests.map(req => `
                                <div style="background-color: #f8f9fa; padding: 15px; border-radius: var(--border-radius); border-left: 4px solid ${req.type === 'corrective' ? 'var(--accent-color)' : 'var(--success-color)'};">
                                    <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                                        <strong>${req.subject}</strong>
                                        <span class="request-type ${req.type}" style="font-size: 0.8rem;">${req.type === 'corrective' ? 'Corrective' : 'Preventive'}</span>
                                    </div>
                                    <div style="display: flex; justify-content: space-between; font-size: 0.9rem; color: #666;">
                                        <span>${formatDate(req.scheduledDate)}</span>
                                        <span>${req.duration} hours</span>
                                        <span>${req.status}</span>
                                    </div>
                                    <button class="btn btn-secondary view-request-btn" data-id="${req.id}" style="margin-top: 10px; padding: 5px 10px; font-size: 0.8rem;">View Details</button>
                                </div>
                            `).join('')}
                        </div>` 
                        : '<p style="text-align: center; color: #666; padding: 20px;">No maintenance requests for this equipment.</p>'
                    }
                </div>
                
                <div class="form-actions">
                    <button class="btn btn-primary" id="create-for-equipment-btn" data-id="${equipmentId}">Create New Request</button>
                    <button class="btn btn-secondary" id="close-details">Close</button>
                </div>
            `;
            
            detailsModal.classList.add('active');
            
            // Add event listeners for view request buttons
            document.querySelectorAll('.view-request-btn').forEach(button => {
                button.addEventListener('click', () => {
                    const requestId = parseInt(button.dataset.id);
                    detailsModal.classList.remove('active');
                    setTimeout(() => showRequestDetails(requestId), 100);
                });
            });
            
            // Add event listener for create request button
            document.getElementById('create-for-equipment-btn').addEventListener('click', () => {
                detailsModal.classList.remove('active');
                setTimeout(() => openRequestModalForEquipment(equipmentId), 100);
            });
            
            document.getElementById('close-details').addEventListener('click', () => {
                detailsModal.classList.remove('active');
            });
        }

        // Open request modal with equipment pre-selected
        function openRequestModalForEquipment(equipmentId) {
            requestModal.classList.add('active');
            document.getElementById('request-equipment').value = equipmentId;
        }

        // Helper functions
        function formatDate(dateString) {
            if (!dateString) return 'Not set';
            const date = new Date(dateString);
            return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
        }

        function formatCategory(category) {
            const categories = {
                production: 'Production',
                it: 'IT Equipment',
                vehicle: 'Vehicle',
                facility: 'Facility'
            };
            return categories[category] || category;
        }

        function getInitials(name) {
            return name.split(' ').map(part => part[0]).join('').toUpperCase();
        }

        // Initialize the application when DOM is loaded
        document.addEventListener('DOMContentLoaded', init);
    
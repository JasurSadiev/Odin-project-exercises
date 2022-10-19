const floors = prompt("How many floors in your hotel? ");
const rooms_floor = prompt("How many rooms in each floor? ");
const rooms_cost = prompt("How much room cost per day in USD? ");
const reserved_rooms_first_week = prompt("How many reserved rooms in: First week:");
const reserved_rooms_second_week = prompt("How many reserved rooms in: Second week:");
const reserved_rooms_third_week = prompt("How many reserved rooms in: Third week:");
const reserved_rooms_fourth_week = prompt("How many reserved rooms in: Fourth week:");


const first_reserved = document.getElementById("reserved-first");
const second_reserved = document.getElementById("reserved-second");
const third_reserved = document.getElementById("reserved-third");
const fourth_reserved = document.getElementById("reserved-fourth");
let total_reserved = document.getElementById("reserved-total");


first_reserved.innerHTML = reserved_rooms_first_week;
second_reserved.innerHTML = reserved_rooms_second_week;
third_reserved.innerHTML = reserved_rooms_third_week;
fourth_reserved.innerHTML = reserved_rooms_fourth_week;
total_reserved.innerHTML = parseInt(reserved_rooms_first_week) + parseInt(reserved_rooms_second_week) + parseInt(reserved_rooms_third_week) + parseInt(reserved_rooms_fourth_week);

// Calculate non-reserved rooms
const non_first_reserved = document.getElementById("non-reserved-first");
const non_second_reserved = document.getElementById("non-reserved-second");
const non_third_reserved = document.getElementById("non-reserved-third");
const non_fourth_reserved = document.getElementById("non-reserved-fourth");
let non_total_reserved = document.getElementById("non-reserved-total");



non_first_reserved.innerHTML = (parseInt(rooms_floor) * parseInt(floors)) - parseInt(reserved_rooms_first_week);
non_second_reserved.innerHTML = (parseInt(rooms_floor) * parseInt(floors)) - parseInt(reserved_rooms_second_week);
non_third_reserved.innerHTML = (parseInt(rooms_floor) * parseInt(floors)) - parseInt(reserved_rooms_third_week);
non_fourth_reserved.innerHTML = (parseInt(rooms_floor) * parseInt(floors)) - parseInt(reserved_rooms_fourth_week);
non_total_reserved.innerHTML = parseInt(non_first_reserved.innerHTML) + parseInt(non_second_reserved.innerHTML) + parseInt(non_third_reserved.innerHTML) + parseInt(non_fourth_reserved.innerHTML);

// Calculate Incomes
const incomes_first = document.getElementById("incomes-first");
const incomes_second = document.getElementById("incomes-second");
const incomes_third = document.getElementById("incomes-third");
const incomes_fourth = document.getElementById("incomes-fourth");
let incomes_total = document.getElementById("incomes-total");

incomes_first.innerHTML = parseInt(first_reserved.innerHTML) * parseInt(rooms_cost);
incomes_second.innerHTML = parseInt(second_reserved.innerHTML) * parseInt(rooms_cost);
incomes_third.innerHTML = parseInt(third_reserved.innerHTML) * parseInt(rooms_cost);
incomes_fourth.innerHTML = parseInt(fourth_reserved.innerHTML) * parseInt(rooms_cost);
incomes_total.innerHTML = parseInt(incomes_first.innerHTML) + parseInt(incomes_second.innerHTML) + parseInt(incomes_third.innerHTML) + parseInt(incomes_fourth.innerHTML)

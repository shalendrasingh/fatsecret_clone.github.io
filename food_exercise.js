// breakfast

add_breakfast_item = () => {
  var input_element = document.getElementById(
    "disp_food_content_section_insert_item_breakfast"
  );
  var value = input_element.value;
  input_element.value = "";
  var parent_element = document.getElementById(
    "disp_food_content_section_breakfast_items"
  );
  var new_element = `<div>${value}</div>`;
  parent_element.innerHTML += new_element;

  var parent2 = document.getElementById("disp_member_profile_2_content");
  parent2.innerHTML += `<div class="disp_member_profile_2_content_item">
                          <img
                            src="https://static.fatsecret.com/static/images/icons/bowl_bp.png"
                          />
                          <span>${value}</span>
                        </div>`;
};

var breakfast_button = document.getElementById(
  "disp_food_content_section_insert_item_breakfast_button"
);

breakfast_button.addEventListener("click", add_breakfast_item);

// lunch

add_lunch_item = () => {
  var input_element = document.getElementById(
    "disp_food_content_section_insert_item_lunch"
  );
  var value = input_element.value;
  input_element.value = "";
  var parent_element = document.getElementById(
    "disp_food_content_section_lunch_items"
  );
  var new_element = `<div>${value}</div>`;
  parent_element.innerHTML += new_element;

  var parent2 = document.getElementById("disp_member_profile_2_content");
  parent2.innerHTML += `<div class="disp_member_profile_2_content_item">
                          <img
                            src="https://static.fatsecret.com/static/images/icons/bowl_bp.png"
                          />
                          <span>${value}</span>
                        </div>`;
};

var lunch_button = document.getElementById(
  "disp_food_content_section_insert_item_lunch_button"
);

lunch_button.addEventListener("click", add_lunch_item);

// dinner

add_dinner_item = () => {
  var input_element = document.getElementById(
    "disp_food_content_section_insert_item_dinner"
  );
  var value = input_element.value;
  input_element.value = "";
  var parent_element = document.getElementById(
    "disp_food_content_section_dinner_items"
  );
  var new_element = `<div>${value}</div>`;
  parent_element.innerHTML += new_element;

  var parent2 = document.getElementById("disp_member_profile_2_content");
  parent2.innerHTML += `<div class="disp_member_profile_2_content_item">
                          <img
                            src="https://static.fatsecret.com/static/images/icons/bowl_bp.png"
                          />
                          <span>${value}</span>
                        </div>`;
};

var dinner_button = document.getElementById(
  "disp_food_content_section_insert_item_dinner_button"
);

dinner_button.addEventListener("click", add_dinner_item);

// snacks

add_snacks_item = () => {
  var input_element = document.getElementById(
    "disp_food_content_section_insert_item_snacks"
  );
  var value = input_element.value;
  input_element.value = "";
  var parent_element = document.getElementById(
    "disp_food_content_section_snacks_items"
  );
  var new_element = `<div>${value}</div>`;
  parent_element.innerHTML += new_element;

  var parent2 = document.getElementById("disp_member_profile_2_content");
  parent2.innerHTML += `<div class="disp_member_profile_2_content_item">
                          <img
                            src="https://static.fatsecret.com/static/images/icons/bowl_bp.png"
                          />
                          <span>${value}</span>
                        </div>`;
};

var snacks_button = document.getElementById(
  "disp_food_content_section_insert_item_snacks_button"
);

snacks_button.addEventListener("click", add_snacks_item);

// Exercise

add_exercise_item = () => {
  var input_element = document.getElementById(
    "disp_food_content_section_insert_item_exercise"
  );
  var value = input_element.value;
  input_element.value = "";
  var parent_element = document.getElementById(
    "disp_food_content_section_exercise_items"
  );
  var new_element = `<div>${value}</div>`;
  parent_element.innerHTML += new_element;

  var parent2 = document.getElementById("disp_member_profile_2_content");
  parent2.innerHTML += `<div class="disp_member_profile_2_content_item">
                          <img
                            src="https://static.fatsecret.com/static/images/icons/activity_bp.png"
                          />
                          <span>${value}</span>
                        </div>`;
};

var exercise_button = document.getElementById(
  "disp_food_content_section_insert_item_exercise_button"
);

exercise_button.addEventListener("click", add_exercise_item);

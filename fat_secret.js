//adding data to local storage
function local_storage_feeds() {
  var everyone_data = [
    {
      profile_pic: "profile_pic2.jpg",
      name: "Himanshu Kumar",
      post1: "Grapes.........",
      post2: "images/grapes.jpg",
      other_likes: 999,
      other_comment_pic: "profile_pic3.jpg",
      other_comment: "Heyyyy..............",
      other_commentor: "Rohan Kumar",
    },
    {
      profile_pic: "profile_pic3.jpg",
      name: "Rohan Kumar",
      post1: "Mango.....",
      post2: "images/mango.jpg",
      other_likes: 101,
      other_comment_pic: "profile_pic2.jpg",
      other_comment: "Hello ................",
      other_commentor: "Sahil Raj",
    },

    {
      profile_pic: "profile_pic2.jpg",
      name: "Himanshu Kumar",
      post1: "Pine apples.........",
      post2: "images/pineapple.jpg",
      other_likes: 600,
      other_comment_pic: "profile_pic3.jpg",
      other_comment: "Heyyyy..............",
      other_commentor: "Rohan Kumar",
    },
    {
      profile_pic: "profile_pic.jpg",
      name: "Uidtanshu Kumar",
      post1: "Lemon.....",
      post2: "images/lemon.jpg",
      other_likes: 166,
      other_comment_pic: "profile_pic2.jpg",
      other_comment: "Hello ................",
      other_commentor: "Sahil Raj",
    },

    {
      profile_pic: "profile_pic.jpg",
      name: "Uditanshu Kumar",
      post1: "Strawberry.........",
      post2: "images/strawberry.jpg",
      other_likes: 476,
      other_comment_pic: "profile_pic3.jpg",
      other_comment: "Heyyyy..............",
      other_commentor: "Rohan Kumar",
    },
    {
      profile_pic: "profile_pic3.jpg",
      name: "Rohan Kumar",
      post1: "Guava.....",
      post2: "images/guava.jpg",
      other_likes: 771,
      other_comment_pic: "profile_pic2.jpg",
      other_comment: "Hello ................",
      other_commentor: "Sahil Raj",
    },

    {
      profile_pic: "profile_pic2.jpg",
      name: "Himanshu Kumar",
      post1: "Water Melon.........",
      post2: "images/watermelon.jpg",
      other_likes: 710,
      other_comment_pic: "profile_pic3.jpg",
      other_comment: "Heyyyy..............",
      other_commentor: "Rohan Kumar",
    },
    {
      profile_pic: "profile_pic3.jpg",
      name: "Rohan Kumar",
      post1: "Banana.....",
      post2: "images/banana.jpg",
      other_likes: 501,
      other_comment_pic: "profile_pic2.jpg",
      other_comment: "Hello ................",
      other_commentor: "Sahil Raj",
    },
  ];

  var me_data = [
    {
      profile_pic: "profile_pic.jpg",
      name: "Uidtanshu Kumar",
      post1: "Lemon.....",
      post2: "images/lemon.jpg",
      other_likes: 166,
      other_comment_pic: "profile_pic2.jpg",
      other_comment: "Hello ................",
      other_commentor: "Sahil Raj",
    },

    {
      profile_pic: "profile_pic.jpg",
      name: "Uditanshu Kumar",
      post1: "Strawberry.........",
      post2: "images/strawberry.jpg",
      other_likes: 476,
      other_comment_pic: "profile_pic3.jpg",
      other_comment: "Heyyyy..............",
      other_commentor: "Rohan Kumar",
    },
  ];

  var featured_data = [
    {
      profile_pic: "profile_pic3.jpg",
      name: "Rohan Kumar",
      post1: "Banana.....",
      post2: "images/banana.jpg",
      other_likes: 501,
      other_comment_pic: "profile_pic2.jpg",
      other_comment: "Hello ................",
      other_commentor: "Sahil Raj",
    },

    {
      profile_pic: "profile_pic2.jpg",
      name: "Himanshu Kumar",
      post1: "Grapes.........",
      post2: "images/grapes.jpg",
      other_likes: 999,
      other_comment_pic: "profile_pic3.jpg",
      other_comment: "Heyyyy..............",
      other_commentor: "Rohan Kumar",
    },
  ];

  var following_data = [
    {
      profile_pic: "profile_pic3.jpg",
      name: "Rohan Kumar",
      post1: "Guava.....",
      post2: "images/guava.jpg",
      other_likes: 771,
      other_comment_pic: "profile_pic2.jpg",
      other_comment: "Hello ................",
      other_commentor: "Sahil Raj",
    },

    {
      profile_pic: "profile_pic2.jpg",
      name: "Himanshu Kumar",
      post1: "Water Melon.........",
      post2: "images/watermelon.jpg",
      other_likes: 710,
      other_comment_pic: "profile_pic3.jpg",
      other_comment: "Heyyyy..............",
      other_commentor: "Rohan Kumar",
    },
  ];

  var a1 = localStorage.getItem("me_data");
  var b1 = localStorage.getItem("following_data");
  var c1 = localStorage.getItem("featured_data");
  var d1 = localStorage.getItem("following_data");

  if (a1 == null) {
    localStorage.setItem("me_data", JSON.stringify(me_data));
  }
  if (b1 == null) {
    localStorage.setItem("following_data", JSON.stringify(following_data));
  }
  if (c1 == null) {
    localStorage.setItem("featured_data", JSON.stringify(featured_data));
  }
  if (d1 == null) {
    localStorage.setItem("everyone_data", JSON.stringify(everyone_data));
  }
}

local_storage_feeds();

function display_handler(event) {
  var ele1 = document.getElementById("disp_feeds_main");
  var ele2 = document.getElementById("disp_calendar");
  var ele3 = document.getElementById("disp_food");
  var ele4 = document.getElementById("disp_exercise");
  var ele5 = document.getElementById("disp_weight_history");
  var ele6 = document.getElementById("disp_journal");
  var ele7 = document.getElementById("disp_groups");
  var ele8 = document.getElementById("disp_challenges");
  var ele9 = document.getElementById("disp_forum_posts");
  var ele10 = document.getElementById("disp_following");
  var ele11 = document.getElementById("disp_cook_book");
  var ele12 = document.getElementById("disp_member_profile");

  ele1.style.visibility = "hidden";
  ele2.style.visibility = "hidden";
  ele3.style.visibility = "hidden";
  ele4.style.visibility = "hidden";
  ele5.style.visibility = "hidden";
  ele6.style.visibility = "hidden";
  ele7.style.visibility = "hidden";
  ele8.style.visibility = "hidden";
  ele9.style.visibility = "hidden";
  ele10.style.visibility = "hidden";
  ele11.style.visibility = "hidden";
  ele12.style.visibility = "hidden";

  var button = event.target;
  if (button.id == "feeds") {
    ele1.style.visibility = "visible";
  }
  if (button.id == "calendar") {
    ele2.style.visibility = "visible";
  }
  if (button.id == "food") {
    ele3.style.visibility = "visible";
  }
  if (button.id == "exercise") {
    ele4.style.visibility = "visible";
  }
  if (button.id == "weight_history") {
    ele5.style.visibility = "visible";
  }
  if (button.id == "journal") {
    ele6.style.visibility = "visible";
  }
  if (button.id == "groups") {
    ele7.style.visibility = "visible";
  }
  if (button.id == "challenges") {
    ele8.style.visibility = "visible";
  }
  if (button.id == "forum_posts") {
    ele9.style.visibility = "visible";
  }
  if (button.id == "following") {
    ele10.style.visibility = "visible";
  }
  if (button.id == "cook_book") {
    ele11.style.visibility = "visible";
  }
  if (button.id == "member_profile") {
    ele12.style.visibility = "visible";
  }
}

var topics = document.querySelectorAll(".fm1_items");
for (var i = 0; i < topics.length; i++) {
  topics[i].addEventListener("click", display_handler);
}

var topics_2 = document.querySelectorAll(".fm2_items");
for (var i = 0; i < topics_2.length; i++) {
  topics_2[i].addEventListener("click", display_handler);
}

// Feeds

class post_feeds {
  constructor(
    profile_pic = "profile_pic.jpg",
    name = "Uditanshu Kumar",
    post_details,
    post_image,
    feed_id,
    self_flag = false,
    other_likes = 0,
    other_comment_pic = "profile_pic.jpg",
    other_comment = "hey...buddies",
    other_commentor = "Uditanshu Kumar"
  ) {
    this.name = name;
    this.profile_pic = profile_pic;
    this.post_details = post_details;
    this.post_image = post_image;
    this.feed_id = feed_id;
    this.flag_likes = 0;
    this.self_flag = self_flag;
    this.other_likes = other_likes;
    this.other_comment_pic = other_comment_pic;
    this.other_comment = other_comment;
    this.other_commentor = other_commentor;
    this.add_data_to_parent();
    this.activate_features();
  }

  //Return Element...START
  //  <div class="df_post_3"></div> is allocated for filling up the duration ....
  post_element = () => {
    var element = "";
    element += ` <div class="df_post">
                    <div class="df_post_1">
                      <div class="df_post_11">
                        <img src="${this.profile_pic}" height="60px" width="60px" />
                      </div>
                      <div class="df_post_12">
                        <br />
                        <a href="#" id="df_post_12_view_short_profile_${this.feed_id}">${this.name}</a>
                        <div class="df_post_12_short_profile" id="df_post_12_short_profile_${this.feed_id}" style="visibility: hidden">
                          <div class="df_post_12_short_profile_1">
                          <div><img src="${this.profile_pic}" /></div>
                          <div>
                            ${this.name}<br />
                            <br />
                            <span>Lost so far: 3.0</span>&nbsp;&nbsp;&nbsp;&nbsp;
                            <span>Still to go: 8.5</span>
                          </div>
                        </div>
                        <div class="df_post_12_short_profile_2">
                          <button class="df_post_12_short_profile_21">
                            Follow +
                          </button>
                          <button class="df_post_12_short_profile_22">
                            View Member profile +
                          </button>
                        </div>
                      </div>
                      <br /><br />
                      ${this.post_details}
                      </div>
                    </div>
                    <div class="df_post_2">
                      <img src="${this.post_image}"/>
                    </div>
                    <div class="df_post_3"></div>
                    <div class="df_post_4">
                      <div class="df_post_41">
                        <div class="df_post_41_comments">
                          <span id="df_post_41_comments_${this.feed_id}">1</span> comments
                        </div>
                        <div class="df_post_41_supporter1">
                          <img src="https://static.fatsecret.com/static/images/def20/feed/But_support_default.png"/>
                          <span id="df_post_41_supporter1_${this.feed_id}">${this.other_likes}</span> supporters
                        </div>
                        <button class="df_post_41_supporter2" id="df_post_41_supporter2_${this.feed_id}">
                          <img src="https://static.fatsecret.com/static/images/def20/feed/But_support_default.png" id="df_post_41_supporter21_${this.feed_id}"/>
                          support
                        </button>
                      </div>
                      <div class="df_post_42">
                          <div class="df_post_42_read_comment" id="df_post_42_read_comment_${this.feed_id}">
                            <div class="df_post_42_read_comment_1">
                              <div>
                                <img src="${this.other_comment_pic}" />
                              </div>
                              <div>
                                <span>${this.other_commentor}</span><br />
                                <span
                                  >${this.other_comment}</span
                                >
                              </div>
                            </div>
                          </div>
                          <div class="df_post_42_insert_comment">
                            <img src="profile_pic.jpg" alt="profile_pic" />
                            <input
                              type="text"
                              placeholder="Write Comment"
                              id="df_post_42_insert_comment_1_${this.feed_id}"
                            />
                          </div>
                          <div class="df_post_42_post_comment">
                          <button
                            class="df_post_42_post_comment_button_1"
                            id="df_post_42_post_comment_button_1_${this.feed_id}"
                          >
                            Post Comment
                          </button>
                          <button
                            class="df_post_42_post_comment_button_2"
                            id="df_post_42_post_comment_button_2_${this.feed_id}"
                          >
                            Cancel
                          </button>
                          </div>
                        </div>
                      </div>
                    </div>
                      `;
    return element;
  };

  post_element_self = () => {
    var element = "";
    element += ` <div class="df_post">
                    <div class="df_post_1">
                      <div class="df_post_11">
                        <img src="${this.profile_pic}" height="60px" width="60px" />
                      </div>
                      <div class="df_post_12">
                        <br />
                        <a href="#" id="df_post_12_view_short_profile_${this.feed_id}">${this.name}</a>
                        <div class="df_post_12_short_profile" id="df_post_12_short_profile_${this.feed_id}" style="visibility: hidden">
                          <div class="df_post_12_short_profile_1">
                          <div><img src="${this.profile_pic}" /></div>
                          <div>
                            ${this.name}<br />
                            <br />
                            <span>Lost so far: 3.0</span>&nbsp;&nbsp;&nbsp;&nbsp;
                            <span>Still to go: 8.5</span>
                          </div>
                        </div>
                        <div class="df_post_12_short_profile_2">
                          <button class="df_post_12_short_profile_21">
                            Follow +
                          </button>
                          <button class="df_post_12_short_profile_22">
                            View Member profile +
                          </button>
                        </div>
                      </div>
                      <br /><br />
                      ${this.post_details}
                      </div>
                    </div>
                    <div class="df_post_2">
                      <img src="${this.post_image}"/>
                    </div>
                    <div class="df_post_3"></div>
                    <div class="df_post_4">
                      <div class="df_post_41">
                        <div class="df_post_41_comments">
                          <span id="df_post_41_comments_${this.feed_id}">0</span> comments
                        </div>
                        <div class="df_post_41_supporter1">
                          <img src="https://static.fatsecret.com/static/images/def20/feed/But_support_default.png"/>
                          <span id="df_post_41_supporter1_${this.feed_id}">0</span> supporters
                        </div>
                        <button class="df_post_41_supporter2" id="df_post_41_supporter2_${this.feed_id}">
                          <img src="https://static.fatsecret.com/static/images/def20/feed/But_support_default.png" id="df_post_41_supporter21_${this.feed_id}"/>
                          support
                        </button>
                      </div>
                      <div class="df_post_42">
                          <div class="df_post_42_read_comment" id="df_post_42_read_comment_${this.feed_id}">
                            
                          </div>
                          <div class="df_post_42_insert_comment">
                            <img src="${this.profile_pic}" alt="profile_pic" />
                            <input
                              type="text"
                              placeholder="Write Comment"
                              id="df_post_42_insert_comment_1_${this.feed_id}"
                            />
                          </div>
                          <div class="df_post_42_post_comment">
                          <button
                            class="df_post_42_post_comment_button_1"
                            id="df_post_42_post_comment_button_1_${this.feed_id}"
                          >
                            Post Comment
                          </button>
                          <button
                            class="df_post_42_post_comment_button_2"
                            id="df_post_42_post_comment_button_2_${this.feed_id}"
                          >
                            Cancel
                          </button>
                          </div>
                        </div>
                      </div>
                    </div>
                      `;
    return element;
  };

  // short profile functions...START
  short_profile = () => {
    var element = document.getElementById(
      `df_post_12_view_short_profile_${this.feed_id}`
    );

    element.addEventListener("mouseover", () => {
      document.getElementById(
        `df_post_12_short_profile_${this.feed_id}`
      ).style.visibility = "visible";
    });

    element.addEventListener("mouseout", () => {
      document.getElementById(
        `df_post_12_short_profile_${this.feed_id}`
      ).style.visibility = "hidden";
    });
  };

  // short profile functions....END

  // Add and remove comments ....START

  add_comments_handler2 = () => {
    var element2 = document.getElementById(
      `df_post_42_insert_comment_1_${this.feed_id}`
    );
    element2.value = "";
  };

  add_comments_handler1 = () => {
    var element2 = document.getElementById(
      `df_post_42_insert_comment_1_${this.feed_id}`
    );
    var comment = element2.value;
    var element3 = document.getElementById(
      `df_post_42_read_comment_${this.feed_id}`
    );
    var result_element = `<div class="df_post_42_read_comment_1">
                          <div>
                            <img src="profile_pic.jpg" />
                          </div>
                          <div>
                            <span>Uditanshu Kumar</span><br />
                            <span
                              >${comment}</span
                            >
                          </div>
                        </div>`;
    element3.innerHTML += result_element;

    element2.value = "";

    var element4 = document.getElementById(
      `df_post_41_comments_${this.feed_id}`
    );
    element4.innerHTML = Number(element4.innerHTML) + 1;
  };

  add_comments = () => {
    var element1 = document.getElementById(
      `df_post_42_post_comment_button_1_${this.feed_id}`
    );
    element1.addEventListener("click", this.add_comments_handler1);

    var element4 = document.getElementById(
      `df_post_42_post_comment_button_2_${this.feed_id}`
    );
    element4.addEventListener("click", this.add_comments_handler2);
  };
  // Add and remove comments ....END

  //Add likes ....START
  add_likes_helper = () => {
    var element1 = document.getElementById(
      `df_post_41_supporter1_${this.feed_id}`
    );
    var element2 = document.getElementById(
      `df_post_41_supporter21_${this.feed_id}`
    );
    if (this.flag_likes == 0) {
      element1.innerHTML = Number(element1.innerHTML) + 1;
      this.flag_likes = 1;
      element2.style.backgroundColor = "red";
    } else if (this.flag_likes == 1) {
      element1.innerHTML = Number(element1.innerHTML) - 1;
      this.flag_likes = 0;
      element2.style.backgroundColor = "grey";
    }
  };

  add_likes = () => {
    var element2 = document.getElementById(
      `df_post_41_supporter2_${this.feed_id}`
    );
    element2.addEventListener("click", this.add_likes_helper);
  };
  //ADD likes end

  //Add post to main screen......START

  add_data_to_parent = () => {
    var post_box = document.getElementById("disp_feeds");
    if (this.self_flag == false) {
      post_box.innerHTML = this.post_element() + post_box.innerHTML;
    } else {
      post_box.innerHTML = this.post_element_self() + post_box.innerHTML;
    }
  };

  //Add post to the main screen ....END

  //activate features of the posts..that has been add till now...START
  activate_features = () => {
    document.getElementById("feeds").addEventListener("click", () => {
      this.short_profile();
      this.add_likes();
      this.add_comments();
    });

    document
      .getElementById("fd_1_divergents_6")
      .addEventListener("click", () => {
        this.short_profile();
        this.add_likes();
        this.add_comments();
      });
  };
  //activate features of the posts..that has been add till now...END
}

class display_feeds {
  constructor() {
    this.count = 1;
    this.post_container = {};
    this.calling_feeds1();
    this.calling_feeds2();
    this.getting_data();
  }

  //FOR DISPLAYING THE DATA THAT HAS BEEN POSTED BY THE USER IN THE REAL TIME...
  //AND ADDING THOSE DATA TO THE LOCAL STORAGE......
  calling_feeds3 = () => {
    var val1 = document.getElementById("dfpc_input_desc");
    var val2 = document.getElementById("dfpc_input_image");
    this.post_container[this.count] = new post_feeds(
      "profile_pic.jpg",
      "Uditanshu Kumar",
      val1.value,
      val2.value,
      this.count,
      true
    );

    var new_element = {
      profile_pic: "profile_pic.jpg",
      name: "Uditanshu Kumar",
      post1: val1.value,
      post2: val2.value,
    };

    var everyone_data = localStorage.getItem("everyone_data");
    everyone_data = JSON.parse(everyone_data);
    everyone_data.push(new_element);
    localStorage.setItem("everyone_data", JSON.stringify(everyone_data));

    var me_data = localStorage.getItem("me_data");
    me_data = JSON.parse(me_data);
    me_data.push(new_element);
    localStorage.setItem("me_data", JSON.stringify(me_data));

    this.count += 1;
    val1.value = "";
    val2.value = "";
  };

  //HELPER FUNCTION FOR FETCHING DATA FROM THE FORM IN REAL TIME...
  calling_feeds2 = () => {
    document
      .getElementById("dfpc_input3_submit_button")
      .addEventListener("click", this.calling_feeds3);
  };

  //FOR DISPLAYING DATA PRESENT IN THE LOCAL STORAGE
  calling_feeds1 = (new_arr = "Hello") => {
    var feeds_arr = [
      {
        profile_pic: "profile_pic.jpg",
        name: "Rohan Kumar",
        post1: "Mango.....",
        post2: "images/mango2.jpg",
        other_likes: 101,
        other_comment_pic: "profile_pic2.jpg",
        other_comment: "Hello ................",
        other_commentor: "Sahil Raj",
      },

      {
        profile_pic: "profile_pic2.jpg",
        name: "Himanshu Kumar",
        post1: "Pine apples.........",
        post2: "images/pineapple.jpg",
        other_likes: 600,
        other_comment_pic: "profile_pic3.jpg",
        other_comment: "Heyyyy..............",
        other_commentor: "Rohan Kumar",
      },
    ];
    document.getElementById("disp_feeds").innerHTML = ""; //MAKING THE FEEDS DISPLAY AREA EMPTY BEFORE ADDING JOURNALS TO IT...

    if (new_arr != "Hello") {
      feeds_arr = new_arr;
    }
    for (let i = 0; i < feeds_arr.length; i++) {
      this.post_container[this.count] = new post_feeds(
        feeds_arr[i]["profile_pic"],
        feeds_arr[i]["name"],
        feeds_arr[i]["post1"],
        feeds_arr[i]["post2"],
        this.count,
        false,
        feeds_arr[i]["other_likes"],
        feeds_arr[i]["other_comment_pic"],
        feeds_arr[i]["other_comment"],
        feeds_arr[i]["other_commentor"]
      );
      this.count += 1;
    }
  };

  //FOR FETCHING DATA FROM LOCAL STORAGE
  getting_data = () => {
    var me_button = document.getElementById(
      "fd_21_section_heading_dropdown_me"
    );

    var following_button = document.getElementById(
      "fd_21_section_heading_dropdown_following"
    );

    var featured_button = document.getElementById(
      "fd_21_section_heading_dropdown_featured"
    );

    var everyone_button = document.getElementById(
      "fd_21_section_heading_dropdown_everyone"
    );
    me_button.addEventListener("click", () => {
      var me_data = localStorage.getItem("me_data");
      me_data = JSON.parse(me_data);
      this.calling_feeds1(me_data);
    });

    following_button.addEventListener("click", () => {
      var following_data = localStorage.getItem("following_data");
      following_data = JSON.parse(following_data);
      this.calling_feeds1(following_data);
    });

    featured_button.addEventListener("click", () => {
      var featured_data = localStorage.getItem("featured_data");
      featured_data = JSON.parse(featured_data);
      this.calling_feeds1(featured_data);
    });

    everyone_button.addEventListener("click", () => {
      var everyone_data = localStorage.getItem("everyone_data");
      everyone_data = JSON.parse(everyone_data);
      this.calling_feeds1(everyone_data);
    });
  };
}

var fat_secret_feeds_container = new display_feeds();

// display date in the footer's upper part ....TILE....

function get_date() {
  var date = new Date();
  var month = date.getUTCMonth() + 1;
  var day = date.getUTCDate();
  var year = date.getUTCFullYear();

  var weekday = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  var month_names = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JULY",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  var present_day = weekday[date.getDay()];
  var parent_element_1 = document.getElementById("fd_1_divergents_2_date_1");
  parent_element_1.innerHTML = present_day + " " + day;
  var parent_element_2 = document.getElementById("fd_1_divergents_2_date_2");
  parent_element_2.innerHTML = month_names[month - 1] + " " + year;
}
get_date();

//dropdown menu function for feed section header......

function handle_feed_dropdown() {
  var drop_element1 = document.getElementById(
    "fd_21_section_heading_drop_selector"
  );
  var drop_element2 = document.getElementById("fd_21_section_heading_dropdown");

  drop_element1.addEventListener("mouseover", () => {
    drop_element2.style.visibility = "visible";
  });

  drop_element1.addEventListener("mouseout", () => {
    drop_element2.style.visibility = "hidden";
  });
}
handle_feed_dropdown();

//handling visibility of tick mark in dropdown....
function handling_tick_visibility() {
  var me_button = document.getElementById("fd_21_section_heading_dropdown_me");

  var following_button = document.getElementById(
    "fd_21_section_heading_dropdown_following"
  );

  var featured_button = document.getElementById(
    "fd_21_section_heading_dropdown_featured"
  );

  var everyone_button = document.getElementById(
    "fd_21_section_heading_dropdown_everyone"
  );

  var tick1 = document.getElementById("fd_21_dropdown_tick1");
  var tick2 = document.getElementById("fd_21_dropdown_tick2");
  var tick3 = document.getElementById("fd_21_dropdown_tick3");
  var tick4 = document.getElementById("fd_21_dropdown_tick4");

  me_button.addEventListener("mouseover", () => {
    tick1.style.visibility = "visible";
  });

  me_button.addEventListener("mouseout", () => {
    tick1.style.visibility = "hidden";
  });

  following_button.addEventListener("mouseover", () => {
    tick2.style.visibility = "visible";
  });

  following_button.addEventListener("mouseout", () => {
    tick2.style.visibility = "hidden";
  });

  featured_button.addEventListener("mouseover", () => {
    tick3.style.visibility = "visible";
  });

  featured_button.addEventListener("mouseout", () => {
    tick3.style.visibility = "hidden";
  });

  everyone_button.addEventListener("mouseover", () => {
    tick4.style.visibility = "visible";
  });

  everyone_button.addEventListener("mouseout", () => {
    tick4.style.visibility = "hidden";
  });
}

handling_tick_visibility();

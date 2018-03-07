    var li = document.querySelectorAll("li");
    var option = document.querySelector(".options_search");
    var statu = document.querySelectorAll(".status");
    var first = document.querySelectorAll(".person");
    var phone = document.querySelectorAll(".phone");
    var plan_disable = document.querySelector(".types");
    plan_disable.disabled = true;
    var clickPerson = true;
    var trying_out  = false;

    //constructor for search

    function Details(name, phone, status, type) {
        this.firstname = name;
        this.phone = phone;
        this.status = status;
        this.type = type;
    }

    var ram = new Details("ram chaterjee", "9215484636", "0", "member");
    var john = new Details("john patinson", "12354636", "1", "member");
    var jd = new Details("janardan prajapati", "93534636", "2", "member");
    var pk = new Details("pranit arora", "68431014354", "3", "member");
    var ram1 = new Details("ram chaterjee", "9215484636", "0", "member");
    var john1 = new Details("john patinson", "12354636", "1", "member");
    var jd1 = new Details("janardan prajapati", "93534636", "2", "member");
    var pk1 = new Details("pranit arora", "68431014354", "3", "member");
    var ram2 = new Details("ram chaterjee", "9215484636", "0", "member");
    var john2 = new Details("john patinson", "12354636", "1", "member");
    var jd2 = new Details("janardan prajapati", "93534636", "2", "member");
    var pk2 = new Details("pranit arora", "68431014354", "3", "member");




    var arr = [ram, jd, john, pk, ram1, jd1, john1, pk1, ram2, jd2, john2, pk2];


    var search = document.querySelector(".input_search1", "input_search");
    search.addEventListener("keyup", function () {

        if (this.value.length >= 1) {
            document.querySelector(".options_search").style.display = "block";
         
            for (i = 0; i < arr.length; i++) {
                statu[i].innerHTML = arr[i].status;
                first[i].innerHTML = arr[i].firstname;
                phone[i].innerHTML = arr[i].phone;

                if (statu[i].innerHTML == 0) {
                    statu[i].textContent = '';
                    var appendice = statu[i];
                    var fuck = document.createElement('i');
                    fuck.classList.add("fa", "fa-circle", "color_red");
                    appendice.appendChild(fuck);
                } else if (statu[i].innerHTML == 1) {
                    statu[i].textContent = '';
                    var appendice = statu[i];
                    var fuck = document.createElement('i');
                    fuck.classList.add("fa", "fa-circle", "color_grey");
                    appendice.appendChild(fuck);
                } else if (statu[i].innerHTML == 2) {
                    statu[i].textContent = '';
                    var appendice = statu[i];
                    var fuck = document.createElement('i');
                    fuck.classList.add("fa", "fa-star", "color_orange");
                    appendice.appendChild(fuck);
                } else if (statu[i].innerHTML == 3) {
                    statu[i].textContent = '';
                    var appendice = statu[i];
                    var fuck = document.createElement('i');
                    fuck.classList.add("fa", "fa-star", "color_red");
                    appendice.appendChild(fuck);
                }
            }


            if (this.value.length >= 2) {
                for (var i = 0; i < first.length; i++) {    //searching
                    var test = first[i].innerHTML.indexOf(this.value.toLowerCase());
                    test = test + 1;
                    if (test) {
                        var select = first[i].parentNode;
                        first[i].parentNode.style.display = "block";

                    } else {
                        first[i].parentNode.style.display = "none";

                    } //end of else statement 

                } //end of looop...

            } // end of this if......
        } //end of top iff....
        else if (this.value.length <= 1) {
            document.querySelector(".options_search").style.display = "none";
        }
    });



    var main_list = document.querySelector(".main_ul");
    main_list.addEventListener("click", (e) => {
        trying_out =  true;
        document.querySelector(".input_search").value = '';
        document.querySelector(".options_search").style.display = "none";
        document.querySelector(".input_search1").style.display = "none";
        document.querySelector(".fa-search").style.display = "none";
        var h1 = document.createElement("h1");
        var span = document.createElement("span");
        span.innerHTML = "&#x2613";
        var down = document.querySelector(".down_search");
        down.appendChild(h1);
        down.appendChild(span);
        var top_search = document.querySelector(".input_search");
        top_search.disabled = true;
        span.addEventListener("click", () => {
            down.removeChild(h1);
            down.removeChild(span);
            document.querySelector(".fa-search").style.display = "block";
            document.querySelector(".input_search1").style.display = "block";
            document.querySelector(".input_search1").value = '';
//            top_search.disabled = false;
        });

        if (e.target.tagName == "LI") {
            console.log(trying_out + ' this is inside the search li element theme');
            var other = e.target.childNodes.item(3).innerHTML;
            h1.innerHTML = other;
        } else {
            console.log(trying_out + ' this is inside gname the  theme');
            var gname = e.target.parentNode.childNodes.item(3).innerHTML;
            h1.innerHTML = gname;
        }
        
        plan_disable.disabled = false;

    });

    /*   
var main_list = document.querySelector(".main_ul");
var jj = document.querySelectorAll(".main_ul li");
main_list.addEventListener("click", function (e) {
    var tags = e.target.parentNode;
    for (i = 0; i < jj.length; i++) {
        var kk = tags.isEqualNode(jj[i]);
        if (kk) {

            var finalName = tags.childNodes[3].innerHTML;
        }
    }
});
*/


    function Months(a, b, c, d, e, f) {
        this.f_month = a;
        this.three_month = b;
        this.six_month = c;
        this.ni_month = d;
        this.twe_month = e;
        this.tf_month = f;
    }
    var gym = {
        standard: new Months(1000, 3000, 6000, 9000, 12000, 24000),
        premium: new Months(2000, 6000, 12000, 18000, 24000, 48000),
        Gold: new Months(4000, 12000, 24000, 36000, 48000, 96000)
    }
    var swimming = {
        standard: new Months(1500, 3600, 7000, 10000, 14000, 26000),
        premium: new Months(2800, 7000, 14000, 20000, 26000, 50000),
        Gold: new Months(5000, 14000, 27000, 40000, 50000, 98000)
    }
    var yoga = {
        standard: new Months(1800, 3700, 7500, 10500, 14500, 26500),
        premium: new Months(2500, 6500, 13500, 19500, 25500, 49500),
        Gold: new Months(4500, 13500, 25500, 37500, 49500, 97500)
    }
    var tennis = {
        standard: new Months(2000, 4000, 8000, 11500, 15500, 26600),
        premium: new Months(2600, 6600, 13600, 19600, 26600, 49600),
        Gold: new Months(4600, 13600, 26600, 37600, 50000, 98000)
    }
    //gym array
    var gymstArr = [gym.standard.f_month, gym.standard.three_month, gym.standard.six_month, gym.standard.ni_month, gym.standard.twe_month, gym.standard.tf_month];
    var gyprArr = [gym.premium.f_month, gym.premium.three_month, gym.premium.six_month, gym.premium.ni_month, gym.premium.twe_month, gym.premium.tf_month];
    var gygdArr = [gym.Gold.f_month, gym.Gold.three_month, gym.Gold.six_month, gym.Gold.ni_month, gym.Gold.twe_month, gym.Gold.tf_month];
    //swimmming Array
    var swimstArr = [swimming.standard.f_month, swimming.standard.three_month, swimming.standard.six_month, swimming.standard.ni_month, swimming.standard.twe_month, swimming.standard.tf_month];
    var swimprArr = [swimming.premium.f_month, swimming.premium.three_month, swimming.premium.six_month, swimming.premium.ni_month, swimming.premium.twe_month, swimming.premium.tf_month];
    var swimgdArr = [swimming.Gold.f_month, swimming.Gold.three_month, swimming.Gold.six_month, swimming.Gold.ni_month, swimming.Gold.twe_month, swimming.Gold.tf_month];
    //yoga Array 
    var yogastArr = [yoga.standard.f_month, yoga.standard.three_month, yoga.standard.six_month, yoga.standard.ni_month, yoga.standard.twe_month, yoga.standard.tf_month];
    var yogaprArr = [yoga.premium.f_month, yoga.premium.three_month, yoga.premium.six_month, yoga.premium.ni_month, yoga.premium.twe_month, yoga.premium.tf_month];
    var yogagdArr = [yoga.Gold.f_month, yoga.Gold.three_month, yoga.Gold.six_month, yoga.Gold.ni_month, yoga.Gold.twe_month, yoga.Gold.tf_month];

    //tennis Array
    var tennisstArr = [tennis.standard.f_month, tennis.standard.three_month, tennis.standard.six_month, tennis.standard.ni_month, tennis.standard.twe_month, tennis.standard.tf_month];
    var tennisprArr = [tennis.premium.f_month, tennis.premium.three_month, tennis.premium.six_month, tennis.premium.ni_month, tennis.premium.twe_month, tennis.premium.tf_month];
    var tennisgdArr = [tennis.Gold.f_month, tennis.Gold.three_month, tennis.Gold.six_month, tennis.Gold.ni_month, tennis.Gold.twe_month, tennis.Gold.tf_month];




console.log(trying_out + ' this is outside the gymnasium theme');

    var cost = document.querySelectorAll(".cost");
    var event = document.querySelector(".Events");
    var select_types = document.querySelector(".types");
    var name;
    var condition = 0;
    var terenaam;
    var values_arr = [];
    var servicetax;
    event.addEventListener("click", function (e) {
        condition = 1;
        console.log(condition);
        console.log(trying_out + ' this is inside the gymnasium theme');
        if(trying_out){
        if (e.target.textContent == "Gymnasium") {
            condition = true;
            name = e.target.textContent;
            select_types.addEventListener("click", function (e) {
                if (e.target.textContent == "Standard") {
                    terenaam = e.target.textContent;
                    for (var i = 0; i < cost.length; i++) {
                        cost[i].innerHTML = gymstArr[i];
                    }
                } else if (e.target.textContent == "Premium") {
                    terenaam = e.target.textContent;
                    for (var i = 0; i < cost.length; i++) {
                        cost[i].innerHTML = gyprArr[i];
                    }
                } else if (e.target.textContent == "Gold") {
                    terenaam = e.target.textContent;
                    for (var i = 0; i < cost.length; i++) {
                        cost[i].innerHTML = gygdArr[i];
                    }
                }

            });

        } else if (e.target.textContent == "Swimming") {
            name = e.target.textContent;
            condition = true;
            select_types.addEventListener("click", function (e) {
                if (e.target.textContent == "Standard") {
                    terenaam = e.target.textContent;
                    for (var i = 0; i < cost.length; i++) {
                        cost[i].innerHTML = swimstArr[i];
                    }
                } else if (e.target.textContent == "Premium") {
                    terenaam = e.target.textContent;
                    for (var i = 0; i < cost.length; i++) {
                        cost[i].innerHTML = swimprArr[i];
                    }
                } else if (e.target.textContent == "Gold") {
                    terenaam = e.target.textContent;
                    for (var i = 0; i < cost.length; i++) {
                        cost[i].innerHTML = swimgdArr[i];
                    }
                }

            });


        } else if (e.target.textContent == "Tenis") {
            name = e.target.textContent;
            condition = true;
            select_types.addEventListener("click", function (e) {
                if (e.target.textContent == "Standard") {
                    terenaam = e.target.textContent;
                    for (var i = 0; i < cost.length; i++) {
                        cost[i].innerHTML = tennisstArr[i];
                    }
                } else if (e.target.textContent == "Premium") {
                    terenaam = e.target.textContent;
                    for (var i = 0; i < cost.length; i++) {
                        cost[i].innerHTML = tennisprArr[i];
                    }
                } else if (e.target.textContent == "Gold") {
                    terenaam = e.target.textContent;
                    for (var i = 0; i < cost.length; i++) {
                        cost[i].innerHTML = tennisgdArr[i];
                    }
                }

            });



        } else if (e.target.textContent == "Yoga") {
            name = e.target.textContent;
            condition = true;
            select_types.addEventListener("click", function (e) {
                if (e.target.textContent == "Standard") {
                    terenaam = e.target.textContent;
                    for (var i = 0; i < cost.length; i++) {
                        cost[i].innerHTML = yogastArr[i];
                    }
                } else if (e.target.textContent == "Premium") {
                    terenaam = e.target.textContent;
                    for (var i = 0; i < cost.length; i++) {
                        cost[i].innerHTML = yogaprArr[i];
                    }
                } else if (e.target.textContent == "Gold") {
                    terenaam = e.target.textContent;

                    for (var i = 0; i < cost.length; i++) {
                        cost[i].innerHTML = yogagdArr[i];

                    }
                }

            });

        }
        
        console.log(trying_out + ' this is outside the saariiiiii theme');
        }
    });




    var prices = document.querySelectorAll(".title li");

    for (var i = 0; i < prices.length; i++) {
        prices[i].addEventListener("click", function (e) {
            console.log(condition);
            if(trying_out){
            if (condition && clickPerson) {
                if (e.target.tagName == "LI") {

                    var dur = e.target.childNodes.item(1).innerHTML;
                    var paisa = e.target.childNodes.item(3).innerHTML;
                    console.log(name + ' ' + terenaam + '  ' + dur + ' ' + paisa);
                    insert(name, terenaam, dur, paisa);
                    var plans_selected_ul = document.querySelector(".plans_selected_ul");
                    document.querySelector(".plans_selected").style.overflowY = "hidden";
                    console.log(plans_selected_ul.childNodes);
                    if (plans_selected_ul.childNodes.length >= 2) {
                        document.querySelector(".plans_selected").style.overflowY = "visible";
                    }



                } else {

                    var dur = e.target.parentNode.childNodes.item(1).innerHTML;
                    var paisa = e.target.parentNode.childNodes.item(3).innerHTML;
                    console.log(name + ' ' + terenaam + '  ' + dur + ' ' + paisa);

                    insert(name, terenaam, dur, paisa);
                    var plans_selected_ul = document.querySelector(".plans_selected_ul");
                    console.log(plans_selected_ul.childNodes);
                    if (plans_selected_ul.childNodes.length >= 2) {
                        document.querySelector(".plans_selected").style.overflowY = "visible";
                    }
                }

                values_arr.push(paisa);
                var sum = values_arr.reduce(add, 0);

                function add(a, b) {
                    return parseInt(a) + parseInt(b);
                }
                
                document.querySelector(".sub_total").innerHTML = sum;
                document.querySelector(".service_tax").innerHTML = 0.05 * sum;



                }
            }
        });
    }




    function insert(plans, types, period, price) {
        var attached = document.querySelector(".plans_selected");
        var html, newHtmlF, newHtmlS, newHtmlT, newHtmlFO, newHtmlFI;
        html = '<ul><li><span>%plans% %types%<br>%period%</span><span>%price%</span></li></ul>';
        newHtmlF = html.replace('%plans%', plans);
        newHtmlS = newHtmlF.replace('%types%', types);
        newHtmlT = newHtmlS.replace('%period%', period);
        newHtmlFO = newHtmlT.replace('%price%', price);
        attached.insertAdjacentHTML('beforeend', newHtmlFO);

    }

    var option_disc = document.querySelector(".disc");
//    console.log(option_disc + ' abhjbshabscjuasbjcbas');
    option_disc.addEventListener("click", (e) => {
        console.log(e.target + ' disc........');
        document.querySelector(".discount_type").innerHTML = option_disc.value;
        if (option_disc.value.length > 2) {
            document.querySelector(".discount_type").classList.add("span_phla");
            var flat_sin$ = document.querySelector(".sub_total").textContent;
            //        console.log("clicked disc.........", +flat_sin$*0.01);
            document.querySelector(".discount_value").innerHTML = flat_sin$ * 0.01;
            document.querySelector(".discount_value").classList.add("span_doosra");
            document.querySelector(".net_amount").innerHTML = (parseInt(flat_sin$) + parseInt(0.05 * flat_sin$) + 2000 - (flat_sin$ * 0.01));

            var payment_received = document.querySelector("#payment_received");
            payment_received.addEventListener("click", () => {
                document.querySelector("#warning").style.display = "block";
//                document.querySelector("#container").style.filter = "brightness(10%)";
            });
        }

    });

    var sele = document.querySelectorAll(".Events li");
    for (i = 0; i < sele.length; i++) {

        sele[i].addEventListener("click", function (e) {
            var el = sele[0];
            while (el) {
                if (el.tagName === "LI") {
                    el.classList.remove("addColor");
                }
                el = el.nextSibling;
            }

            e.target.classList.add("addColor");



        });
    }
    var sele1 = document.querySelectorAll(".types li");
    for (i = 0; i < sele1.length; i++) {

        sele1[i].addEventListener("click", function (e) {
            var el = sele1[0];
            while (el) {
                if (el.tagName === "LI") {
                    el.classList.remove("addborder");
                }
                el = el.nextSibling;
            }

            e.target.classList.add("addborder");



        });
    }

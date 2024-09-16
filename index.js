
var alpha = document.querySelectorAll(".key").length

// for ( var i = 0 ; i < alpha ; i ++){
//     document.querySelectorAll(".key")[i].addEventListener("onclick" , function(){
//         var inner = this.innerHTML;
//         makeSound(inner);
//     });
// };
document.addEventListener("keypress" , function(e){
    makeSound(e);

    
});


function makeSound(e){
    switch (e.key) {
        case "a":
            var a = new Audio('a.m4a');
            a.play();
            
            break;
        case "b":
            var a = new Audio('b.m4a');
            a.play();
            
            break;
        case "c":
            var a = new Audio('c.m4a');
            a.play();
            
            break;
        case "d":
            var a = new Audio('d.m4a');
            a.play();
            
            break;
        case "e":
            var a = new Audio('e.m4a');
            a.play();
            
            break;
        case "f":
            var a = new Audio('f.m4a');
            a.play();
            
            break;
        case "g":
            var a = new Audio('g.m4a');
            a.play();
            
            break;
        case "h":
            var a = new Audio('h.m4a');
            a.play();
            
            break;
        case "i":
            var a = new Audio('i.m4a');
            a.play();
            
            break;
        case "j":
            var a = new Audio('j.m4a');
            a.play();
            
            break;
        case "k":
            var a = new Audio('k.m4a');
            a.play();
            
            break;
        case "l":
            var a = new Audio('l.m4a');
            a.play();
            
            break;
        case "m":
            var a = new Audio('m.m4a');
            a.play();
            
            break;
        case "n":
            var a = new Audio('n.m4a');
            a.play();
            
            break;
        case "o":
            var a = new Audio('o.m4a');
            a.play();
            
            break;
        case "p":
            var a = new Audio('p.m4a');
            a.play();
            
            break;
        case "q":
            var a = new Audio('q.m4a');
            a.play();
            
            break;
        case "r":
            var a = new Audio('r.m4a');
            a.play();
            
            break;
        case "s":
            var a = new Audio('s.m4a');
            a.play();
            
            break;
        case "t":
            var a = new Audio('t.m4a');
            a.play();
            
            break;
        case "u":
            var a = new Audio('u.m4a');
            a.play();
            
            break;
        case "v":
            var a = new Audio('v.m4a');
            a.play();
            
            break;
        case "w":
            var a = new Audio('w.m4a');
            a.play();
            
            break;
        case "x":
            var a = new Audio('x.m4a');
            a.play();
            
            break;
        case "y":
            var a = new Audio('y.m4a');
            a.play();
            
            break;
        case "z":
            var a = new Audio('z.m4a');
            a.play();
            
            break;
    
        default:
            console.log("This is not in directory");
            
            break;
    }
};


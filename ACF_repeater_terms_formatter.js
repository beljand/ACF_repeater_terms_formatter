//ACF repeater terms formater - from lots of array to one transparent Object
//Author: @davidbeljan

// This little tool helps you to collect ACF's repeater field generated values from your objects meta (WP post meta)
// and put them in a simple object
// The function takes 5 arguments
//
// terms  - location of all wp post terms (JavaScript object)
// starts - array's name starting string
// ends1  - array's name ending string - later this becomes the property name
// ends2  - array's name ending string - later this becomes the property value
// target - name of the new Object containt theese keys & values

formatTerms: function(terms, starts, ends1, ends2, target) {
    var terms,
        starts,
        ends1,
        ends2,
        target;

    terms[target] = {}; //Create new Object

    for (var i in terms) {
        var regex1 = "/^"+starts+".*"+ends1+"$/",
            regex2 = "/^"+starts+".*"+ends2+"$/",
            key;

        if (i.match("^"+starts+".*"+ends1+"$")) {
            key = terms[i][0];
            
            terms[target][key] = "";
        }
        if (i.match("^"+starts+".*"+ends2+"$")) {
            value = terms[i][0];
            terms[target][key] = value;
        }
    }
}
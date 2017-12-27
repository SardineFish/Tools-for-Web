function parseSearch()
{
    var search = location.search.substring(1);
    var pair = search.split(/&/);
    var obj = {};
    for (var i = 0; i < pair.length; i++)
    {
        var key = pair[i].split(/=/)[0];
        var value = pair[i].split(/=/)[1];
        if (!isNaN(value))
            value = parseFloat(value);
        obj[key] = value;
    }
    return obj;
}
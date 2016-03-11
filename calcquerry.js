var Fcalc = $("form")[0];
var Currents = 0;
var FlagNewNum = false;
var PendingOp = "";





function NumPressed (Num) 
{
        if (FlagNewNum) 
        {
            $(".answerfield").val(Num);
            FlagNewNum = false;
        }   
        else 
        {
            if ($(".answerfield").val() == "0")
                $(".answerfield").val(Num);
            
            else
                $(".answerfield").Num += Num;
        }
}
    

function Operation (Op) 
{
        var Result = $(".answerfield").val();
        if (FlagNewNum && PendingOp != "=")
        {
            $(".answerfield").val(Currents);
        }
        else
        {
            FlagNewNum = true;
            if ( '+' == PendingOp )
                Currents += parseFloat(Result);
            else if ( '-' == PendingOp )
                Currents -= parseFloat(Result);
            else if ( '/' == PendingOp )
                Currents /= parseFloat(Result);
            else if ( '*' == PendingOp )
                Currents *= parseFloat(Result);
            else
                Currents = parseFloat(Result);

            $(".answerfield").val(Currents);

            PendingOp = Op;
                if($(".answerfield").val() == Infinity || NaN) { 
                $(".answerfield").val("На ноль делить нельзя!");
                }
        }       
     }
    
$("#buttonequal").bind("click", function (event) 
{
        var curResult = $(".answerfield").val();
        if (FlagNewNum) 
        {
            curResult = "0.";
            FlagNewNum = false;
        }
        else
        {
            if (curResult.indexOf(".") == -1)
                curResult += ".";
        }
        $(".answerfield").val() = curResult;
});
    

$(".anybutton").eq(4).bind("click", function (event) 
{
        $(".answerfield").val(0);
        FlagNewNum = true;

});

$(".anybutton").eq(9).bind("click", function (event) 
{
        $(".answerfield").val(parseFloat($(".answerfield").val()) * -1);
});
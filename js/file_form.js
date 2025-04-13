document.addEventListener('DOMContentLoaded', (e) => {
const form = document.getElementById('form1');
const input = document.getElementById('input');
var f = "dataEmail.txt";
function writeTextFile(afilename, output)
{
    var txtFile =new File(afilename);
    txtFile.writeln(output);
    txtFile.close();
}
form.addEventListener('submit', (e) => {
    writeTextFile(f, input.Value)
});
});

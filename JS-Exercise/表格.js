document.write('<table cellpadding="10" border="1" cellspacing="0">');
			for(i=1;i<=10;i++){
				document.write('<tr>');
				for(j=1;j<=10;j++){
					if(j%2==0){
						document.write('<td bgcolor="yellow">8</td>');
					}else{
						document.write('<td bgcolor="red">8</td>');
					}
				}
				document.write('</tr>');
			}
		document.write('</table>');

		document.write('</br>');

		let str='<table cellpadding="10" border="1" cellspacing="0">';
			for(let x=1;x<=10;x++){
				str+='<tr>';
				for(let y=1;y<=10;y++){
					str+='<td>0</td>';
				}
				str+='</tr>';
			}
		str+='</table>';

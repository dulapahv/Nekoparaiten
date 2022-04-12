function deleteData(id, email)
{
	console.log(email);
	var id = id;
	var url = '{{ route("usuarios.destroy", ":id") }}';
	url = url.replace(':id', id);
	$("#deleteForm").attr('action', url);
	$("#spn_usuarioID").text(email);

}

function formSubmit()
{
	$("#deleteForm").submit();
}
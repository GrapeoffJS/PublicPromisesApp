$('#send').on('click', event => {
    event.preventDefault();

    const author = $('#author').val();
    const text = $('#promise').val();

    if (author.trim() === '' || text.trim() === '') {
        alert('Введите сообщение и подпись');
        return;
    }

    $.ajax({
        type: 'POST',
        url: '/api',
        data: { author, text }
    });

    $.ajax({
        type: 'GET',
        url: '/api',
        success(response) {
            $('#promises').children('.tr').remove();

            for (const promise of response) {
                $('#promises').append(`
                    <tr class="tr">
                        <th scope="row">${promise.author}</th>
                        <td>${promise.text}</td>
                    </tr>
                `);
            }
        }
    });

    $('#author').val('');
    $('#promise').val('');
});

$(document).on('DOMContentLoaded', () => {
    $.ajax({
        type: 'GET',
        url: '/api',
        success(response) {
            for (const promise of response) {
                $('#promises').append(`
                    <tr class="tr">
                        <th scope="row">${promise.author}</th>
                        <td>${promise.text}</td>
                    </tr>
                `);
            }
        }
    });
});

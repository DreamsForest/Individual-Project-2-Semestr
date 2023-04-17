<template>
  <div class="hello">
    <div class="container mt-5">
      <h1>Урок по отправке данных из формы сайта на почту</h1>
      <form action="https://xn----8sbnsmgddem0a1a.xn--p1ai/mail.php" class="form-data" method="POST">
        <div class="form-group">
          <label for="exampleInputEmail1">Имя</label>
          <input type="text" class="form-control" name="user-name" id="exampleInputEmail1" placeholder="Введите имя" aria-describedby="emailHelp" required>
        </div>
      </form>
      <div class="form-group">
          <label for="exampleInputPassword1">Телефон</label>
          <input type="text" class="form-control" name="user-name" id="examplePassword1" placeholder="+7 999 999 99 99" required>
        </div>
      <div class="form-group form-check">
          <label for="exampleCheck1" class="form-check-input">Согласие на обработку данных</label>
          <input type="checkbox" class="form-check-input" id="exampleCheck1" required>
        </div>
      <button type="submit" class="btn btn-primary">Отправить</button>
    </div>
  </div>
</template>

<script>
  let FormS = document.querySelector(".form-data");

  FormS.addEventListener('submit', function(e){
    e.preventDefault();

    let elem = e.target

    let formData = {

      name: elem.querySelector('[name="user_name"]').value,
      phone: elem.querySelector('[name="user_phone"]').value,
    };





  })
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

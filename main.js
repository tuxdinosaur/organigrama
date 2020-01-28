$(document).ready(function() {
  //   $(".department1").append(`
  //     <div class="department-list">
  //         <div class="department">
  //             <div class="title hijo">Hijo con JS</div>
  //             <div class="content"></div>
  //         </div>
  //     </div>
  // `);
  $(".department1").append(`
  <div class="department">
    <div class="title hijo">Hijo con JS</div>
    <div class="content is-visible"></div>
  </div>
  `);

  $(".nieto1").append(`
      <div class="department-list">
          <div class="department">
              <div class="title nieto">Nieto con JS</div>
              <div class="content"></div>
          </div>
      </div>
  `);
});

(function() {
  <environment include="Development">
    <script src="~/lib/jquery-validation/dist/jquery.validate.js"></script>
    <script src="~/lib/jquery-validation-unobtrusive/jquery.validate.unobtrusive.js"></script>
</environment>;

  <environment exclude="Development">
    <script src="https://ajax.aspnetcdn.com/ajax/jquery.validate/1.14.0/jquery.validate.min.js" asp-fallback-src="~/lib/jquery-validation/dist/jquery.validate.min.js" asp-fallback-test="window.jQuery && window.jQuery.validator" crossorigin="anonymous" integrity="sha384-Fnqn3nxp3506LP/7Y3j/25BlWeA3PXTyT1l78LjECcPaKCV12TsZP7yyMxOe/G/k">
    </script>
    <script src="https://ajax.aspnetcdn.com/ajax/jquery.validation.unobtrusive/3.2.6/jquery.validate.unobtrusive.min.js" asp-fallback-src="~/lib/jquery-validation-unobtrusive/jquery.validate.unobtrusive.min.js" asp-fallback-test="window.jQuery && window.jQuery.validator && window.jQuery.validator.unobtrusive" crossorigin="anonymous" integrity="sha384-JrXK+k53HACyavUKOsL+NkmSesD2P+73eDMrbTtTk0h4RmOF8hF8apPlkp26JlyH">
    </script>
</environment>;

}).call(this);

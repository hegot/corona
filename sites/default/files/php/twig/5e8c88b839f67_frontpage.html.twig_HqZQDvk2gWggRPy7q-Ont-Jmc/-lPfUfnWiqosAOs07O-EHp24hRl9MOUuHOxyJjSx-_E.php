<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* sites/all/modules/custom/frontpage/templates/frontpage.html.twig */
class __TwigTemplate_ed3e18a5e14ae0e93b755a374fbfe99fda5c9f797248ec37e28ff85d115464cc extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $tags = [];
        $filters = [];
        $functions = [];

        try {
            $this->sandbox->checkSecurity(
                [],
                [],
                []
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->getSourceContext());

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        // line 1
        echo "<div class=\"frontpage-main-block\">

    <h1>Welcome to COVID19 Reach Census</h1>
    <p>
        We are asking all US residents to fill out detailed Census
        to help \\n us all track and analyse the spread of Covid19 here in the US.
    </p>
    <p>
        We do not ask for any indentifiable information.
        Your submission will be totally anonimus and safe.
    </p>
    <div class=\"frontpage-center\">
        <a class=\"form-link\">
        </a>
        <div class=\"pushsend-logo\">
            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"628.85\" height=\"127.89\" viewBox=\"0 0 628.85 127.89\"><path d=\"M81.49,127.89a8,8,0,0,1-7.84-7.84V63.78a35.84,35.84,0,0,1,11-26.32A35.85,35.85,0,0,1,111,26.57a36,36,0,0,1,26.38,11A36,36,0,0,1,148.32,63.9a36,36,0,0,1-10.95,26.38,36,36,0,0,1-26.38,11q-14.13,0-21.45-6.48V120a8,8,0,0,1-7.84,7.84h-.21ZM126.15,79a20.68,20.68,0,0,0,6.29-15.17A21.55,21.55,0,0,0,95.75,48.55a20.84,20.84,0,0,0-6.22,15.23A21.45,21.45,0,0,0,126.15,79Z\" fill=\"#fff\"></path><path d=\"M171.9,69.94a15.46,15.46,0,1,0,30.91,0V34.48a8,8,0,0,1,7.9-7.9h.13a7.29,7.29,0,0,1,5.51,2.33,7.59,7.59,0,0,1,2.33,5.57V69.93a30.14,30.14,0,0,1-9.2,22.1,31.23,31.23,0,0,1-44.27,0,30.11,30.11,0,0,1-9.2-22.1V34.48a7.61,7.61,0,0,1,2.33-5.57,7.52,7.52,0,0,1,5.51-2.33H164a8,8,0,0,1,7.84,7.9V69.94Z\" fill=\"#fff\"></path><path d=\"M248.44,42.46a6.55,6.55,0,0,0-4.8,1.94,6.64,6.64,0,0,0-1.94,4.8A6.22,6.22,0,0,0,245.46,55q1.29.72,10.82,3.24Q264,60.48,267.75,64q5.38,5.11,5.38,14.58a22.57,22.57,0,0,1-22.62,22.62H233.6a7.56,7.56,0,0,1-5.51-2.33,7.25,7.25,0,0,1-2.33-5.51v-.13a7.61,7.61,0,0,1,2.33-5.57,7.52,7.52,0,0,1,5.51-2.33h17.57a6.63,6.63,0,0,0,6.74-6.74q0-3.57-3.69-5.38-1-.45-10.89-3.24-7.71-2.27-11.47-6-5.38-5.25-5.38-14.84A22.69,22.69,0,0,1,249.1,26.58H261a8,8,0,0,1,7.9,7.9v.13a7.29,7.29,0,0,1-2.33,5.51A7.59,7.59,0,0,1,261,42.45H248.44Z\" fill=\"#fff\"></path><path d=\"M288.22,0a7.66,7.66,0,0,1,5.51,2.27,7.59,7.59,0,0,1,2.33,5.57V30.4q5.12-3.82,15.49-3.82a30.14,30.14,0,0,1,22.1,9.2A30.21,30.21,0,0,1,342.85,58V93.4a8,8,0,0,1-7.84,7.84h-.13a7.61,7.61,0,0,1-5.57-2.33A7.25,7.25,0,0,1,327,93.4V58a15.46,15.46,0,1,0-30.91,0V93.4a7.29,7.29,0,0,1-2.33,5.51,7.52,7.52,0,0,1-5.51,2.33H288a7.56,7.56,0,0,1-5.51-2.33,7.25,7.25,0,0,1-2.33-5.51V7.84a7.61,7.61,0,0,1,2.33-5.57A7.66,7.66,0,0,1,288,0Z\" fill=\"#fff\"></path><path d=\"M372.6,42.46a6.55,6.55,0,0,0-4.8,1.94,6.64,6.64,0,0,0-1.94,4.8A6.22,6.22,0,0,0,369.62,55q1.29.72,10.82,3.24,7.71,2.2,11.47,5.77,5.38,5.11,5.38,14.58a22.57,22.57,0,0,1-22.62,22.62H357.75a7.56,7.56,0,0,1-5.51-2.33,7.25,7.25,0,0,1-2.33-5.51v-.13a7.61,7.61,0,0,1,2.33-5.57,7.52,7.52,0,0,1,5.51-2.33h17.57a6.63,6.63,0,0,0,6.74-6.74q0-3.57-3.69-5.38-1-.45-10.89-3.24-7.71-2.27-11.47-6-5.38-5.25-5.38-14.84a22.69,22.69,0,0,1,22.62-22.63h11.93a8,8,0,0,1,7.91,7.9v.13a7.29,7.29,0,0,1-2.33,5.51,7.59,7.59,0,0,1-5.58,2.33H372.6Z\" fill=\"#78bc43\"></path><path d=\"M473.64,48.35a7.78,7.78,0,0,1-3.89,10.44L445.9,69.55q-18.34,8.3-21.52,9.79,4.92,6.22,15.36,6.22a20.94,20.94,0,0,0,12.57-4.08A21.19,21.19,0,0,0,460,71.11a7.33,7.33,0,0,1,7.52-5.32A7.49,7.49,0,0,1,474,69.16a7.35,7.35,0,0,1,1.49,4.34,8,8,0,0,1-.52,2.79,35.7,35.7,0,0,1-13.42,17.89,37.16,37.16,0,0,1-48.16-3.89,36,36,0,0,1-11-26.38,36,36,0,0,1,11-26.38,37.17,37.17,0,0,1,46.73-4.86A36.22,36.22,0,0,1,473.64,48.35Zm-33.9-5.76a21.36,21.36,0,0,0-21.45,21.52v.45l36.23-16.27Q449.72,42.59,439.74,42.59Z\" fill=\"#78bc43\"></path><path d=\"M499.69,93.4a7.29,7.29,0,0,1-2.33,5.51,7.52,7.52,0,0,1-5.51,2.33h-.19a7.56,7.56,0,0,1-5.51-2.33,7.25,7.25,0,0,1-2.33-5.51V58A30.25,30.25,0,0,1,493,35.78a31.23,31.23,0,0,1,44.27,0A30.25,30.25,0,0,1,546.49,58V93.4a8,8,0,0,1-7.84,7.84h-.13a7.65,7.65,0,0,1-5.58-2.33,7.25,7.25,0,0,1-2.33-5.51V58a15.46,15.46,0,1,0-30.91,0V93.4Z\" fill=\"#78bc43\"></path><path d=\"M621,0a7.66,7.66,0,0,1,5.51,2.27,7.59,7.59,0,0,1,2.33,5.57V64.1a35.74,35.74,0,0,1-11,26.25,37.24,37.24,0,0,1-52.7-.07,36,36,0,0,1-11-26.38,36,36,0,0,1,11-26.38,36,36,0,0,1,26.38-11q14.07,0,21.46,6.48V7.84A7.85,7.85,0,0,1,620.82,0ZM576.29,48.87a20.84,20.84,0,0,0-6.22,15.23,21.46,21.46,0,0,0,42.91,0,21.5,21.5,0,0,0-36.69-15.23Z\" fill=\"#78bc43\"></path><path d=\"M17.73,38.69A4,4,0,0,1,19,41.38l.39,6.8c.05.87.65,1.16,1.36.63L21.91,48a4,4,0,0,1,5.36.56l6.78,7.69A1.07,1.07,0,0,0,35.9,56L50.52,30.7c.44-.76.09-1.28-.78-1.17L14.5,34c-.87.11-1.06.68-.41,1.28ZM1.28,34.28a4,4,0,0,1,2.2-6.86l54.79-7a4,4,0,0,1,3.95,5.93l-23,39.83a4,4,0,0,1-6.43.64l-8-9.09a1.77,1.77,0,0,0-2.34-.24l-4.13,3.08a4,4,0,0,1-6.35-3L11.24,45A4.57,4.57,0,0,0,10,42.35Z\" fill=\"#78bc43\"></path></svg>
        </div>
        <a class=\"privacy-policy-link\">privacy policy</a>
    </div>


</div>";
    }

    public function getTemplateName()
    {
        return "sites/all/modules/custom/frontpage/templates/frontpage.html.twig";
    }

    public function getDebugInfo()
    {
        return array (  55 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "sites/all/modules/custom/frontpage/templates/frontpage.html.twig", "/var/www/html/sites/all/modules/custom/frontpage/templates/frontpage.html.twig");
    }
}

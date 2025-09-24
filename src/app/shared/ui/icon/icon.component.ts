import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
  inject,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

export type TIconName =
  | 'gmaoIcon'
  | 'emailIcon'
  | 'passwordIcon'
  | 'togglePasswordIcon'
  | 'backIcon'
  | 'loginIcon'
  | 'alertIcon'
  | 'eyeOffIcon'
  | 'eyeIcon'
  | 'loadingIcon';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
  template: `<span #iconContainer></span> `,
})
export class IconComponent implements OnInit {
  @Input({ required: true }) iconName!: TIconName;
  @ViewChild('iconContainer', { static: true })
  iconContainer!: ElementRef<HTMLSpanElement>;

  sanitizer = inject(DomSanitizer);
  renderer = inject(Renderer2);

  ngOnInit(): void {
    const svgString = this.svg(this.iconName);
    this.renderer.setProperty(
      this.iconContainer.nativeElement,
      'innerHTML',
      svgString
    );
  }

  svg(iconName: TIconName) {
    const svgMap: { [Key in TIconName]: string } = {
      gmaoIcon: `
      <svg
              width="25"
              viewBox="0 0 25 42"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <defs>
                <path
                  d="M13.7918663,0.358365126 L3.39788168,7.44174259 C0.566865006,9.69408886 -0.379795268,12.4788597 0.557900856,15.7960551 C0.68998853,16.2305145 1.09562888,17.7872135 3.12357076,19.2293357 C3.8146334,19.7207684 5.32369333,20.3834223 7.65075054,21.2172976 L7.59773219,21.2525164 L2.63468769,24.5493413 C0.445452254,26.3002124 0.0884951797,28.5083815 1.56381646,31.1738486 C2.83770406,32.8170431 5.20850219,33.2640127 7.09180128,32.5391577 C8.347334,32.0559211 11.4559176,30.0011079 16.4175519,26.3747182 C18.0338572,24.4997857 18.6973423,22.4544883 18.4080071,20.2388261 C17.963753,17.5346866 16.1776345,15.5799961 13.0496516,14.3747546 L10.9194936,13.4715819 L18.6192054,7.984237 L13.7918663,0.358365126 Z"
                  id="path-1"
                ></path>
                <path
                  d="M5.47320593,6.00457225 C4.05321814,8.216144 4.36334763,10.0722806 6.40359441,11.5729822 C8.61520715,12.571656 10.0999176,13.2171421 10.8577257,13.5094407 L15.5088241,14.433041 L18.6192054,7.984237 C15.5364148,3.11535317 13.9273018,0.573395879 13.7918663,0.358365126 C13.5790555,0.511491653 10.8061687,2.3935607 5.47320593,6.00457225 Z"
                  id="path-3"
                ></path>
                <path
                  d="M7.50063644,21.2294429 L12.3234468,23.3159332 C14.1688022,24.7579751 14.397098,26.4880487 13.008334,28.506154 C11.6195701,30.5242593 10.3099883,31.790241 9.07958868,32.3040991 C5.78142938,33.4346997 4.13234973,34 4.13234973,34 C4.13234973,34 2.75489982,33.0538207 2.37032616e-14,31.1614621 C-0.55822714,27.8186216 -0.55822714,26.0572515 -4.05231404e-15,25.8773518 C0.83734071,25.6075023 2.77988457,22.8248993 3.3049379,22.52991 C3.65497346,22.3332504 5.05353963,21.8997614 7.50063644,21.2294429 Z"
                  id="path-4"
                ></path>
                <path
                  d="M20.6,7.13333333 L25.6,13.8 C26.2627417,14.6836556 26.0836556,15.9372583 25.2,16.6 C24.8538077,16.8596443 24.4327404,17 24,17 L14,17 C12.8954305,17 12,16.1045695 12,15 C12,14.5672596 12.1403557,14.1461923 12.4,13.8 L17.4,7.13333333 C18.0627417,6.24967773 19.3163444,6.07059163 20.2,6.73333333 C20.3516113,6.84704183 20.4862915,6.981722 20.6,7.13333333 Z"
                  id="path-5"
                ></path>
              </defs>
              <g
                id="g-app-brand"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g
                  id="Brand-Logo"
                  transform="translate(-27.000000, -15.000000)"
                >
                  <g id="Icon" transform="translate(27.000000, 15.000000)">
                    <g id="Mask" transform="translate(0.000000, 8.000000)">
                      <mask id="mask-2" fill="white">
                        <use xlink:href="#path-1"></use>
                      </mask>
                      <use fill="#696cff" xlink:href="#path-1"></use>
                      <g id="Path-3" mask="url(#mask-2)">
                        <use fill="#696cff" xlink:href="#path-3"></use>
                        <use
                          fill-opacity="0.2"
                          fill="#FFFFFF"
                          xlink:href="#path-3"
                        ></use>
                      </g>
                      <g id="Path-4" mask="url(#mask-2)">
                        <use fill="#696cff" xlink:href="#path-4"></use>
                        <use
                          fill-opacity="0.2"
                          fill="#FFFFFF"
                          xlink:href="#path-4"
                        ></use>
                      </g>
                    </g>
                    <g
                      id="Triangle"
                      transform="translate(19.000000, 11.000000) rotate(-300.000000) translate(-19.000000, -11.000000) "
                    >
                      <use fill="#696cff" xlink:href="#path-5"></use>
                      <use
                        fill-opacity="0.2"
                        fill="#FFFFFF"
                        xlink:href="#path-5"
                      ></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
`,
      emailIcon: `<svg
                class="h-5 w-5 text-slate-400 group-focus-within:text-gmao-primary transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>`,

      passwordIcon: `<svg
                class="h-5 w-5 text-slate-400 group-focus-within:text-gmao-primary transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>`,
      togglePasswordIcon: ` <svg
                class="h-5 w-5 text-slate-400 hover:text-gmao-primary transition-colors cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>`,
      backIcon: ` <svg
                class="h-5 w-5 text-white/80 group-hover:text-white transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                />
              </svg>`,
      loginIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<title>Login Icon — user + key</title>
<!-- user circle -->
<circle cx="22" cy="22" r="10" fill="none"/>
<!-- user shoulders -->
<path d="M10 46c0-6.627 5.373-12 12-12h8c6.627 0 12 5.373 12 12" fill="none"/>
<!-- key shape (login) -->
<path d="M46 26h8v4h-2v2h-2v2h-2" fill="none"/>
<circle cx="44" cy="28" r="3" fill="none"/>
</svg>`,
      alertIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" role="img" aria-labelledby="alertTitle">
  <title id="alertTitle">Alert</title>
  <path fill="none" d="M0 0h24v24H0z"/>
  <path d="M1 21h22L12 2 1 21zM12 16a1.25 1.25 0 1 1 0 2.5A1.25 1.25 0 0 1 12 16zm0-6.5c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1s-1-.45-1-1v-3c0-.55.45-1 1-1z"/>
</svg>
`,
      eyeOffIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" role="img" aria-labelledby="eyeOffTitle">
  <title id="eyeOffTitle">Eye Off</title>
  <path fill="none" d="M0 0h24v24H0z"/>
  <path d="M12 5c4.97 0 9 4.02 9 7s-4.03 7-9 7c-1.85 0-3.56-.48-5.02-1.32l1.46-1.46A7.957 7.957 0 0 0 12 19c3.31 0 6.08-2.24 7.17-4-1.02-1.66-3.44-4-7.17-4-1.56 0-2.99.42-4.18 1.12L7.41 7.7A9.952 9.952 0 0 1 12 5zm-9.19-1.19L3.39 2.01 21 19.62 19.59 21 16.5 17.91A9.966 9.966 0 0 1 12 21C7.03 21 3 16.98 3 14c0-1.11.62-2.39 1.81-3.19L2.81 3.81zM9.17 11.83A2.99 2.99 0 0 0 12 15c.82 0 1.57-.33 2.1-.86l-4.93-4.93A2.99 2.99 0 0 0 9.17 11.83z"/>
</svg>
`,
      eyeIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" role="img" aria-labelledby="eyeTitle">
  <title id="eyeTitle">Eye</title>
  <path fill="none" d="M0 0h24v24H0z"/>
  <path d="M12 5c-5 0-9 4-9 7s4 7 9 7 9-4 9-7-4-7-9-7zm0 11.5A4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 0 1 0 9zm0-7a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z"/>
</svg>
`,
      loadingIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="24" height="24" role="img" aria-labelledby="loadingTitle">
  <title id="loadingTitle">Loading</title>
  <circle cx="25" cy="25" r="20" fill="none" stroke-width="5" stroke-opacity="0.2" />
  <path d="M45 25A20 20 0 0 1 25 5" fill="none" stroke-width="5" stroke-linecap="round">
    <animateTransform attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="1s" repeatCount="indefinite"/>
  </path>
</svg>
`,
    };

    return svgMap[iconName];
  }
}

import { type Component } from "solid-js";

import { PgAdmonition } from "../design-system/PgAdmonition.jsx";
import { PgButton } from "../design-system/PgButton.jsx";
import { PgInput } from "../design-system/PgInput.jsx";

export interface DemoProps {}

export const Demo: Component<DemoProps> = (_props) => {
  return (
    <>
      <section class="pg-mw-content ml-auto mr-auto pr-6 pl-6">
        <h2 class="pg-text-heading pg-mt-10">Hello World!</h2>
        <hr class="pg-mt-4" />
        <p class="pg-text-body pg-mt-4">
          Puppy kitty ipsum dolor sit good dog foot stick canary. Teeth Mittens
          grooming vaccine walk swimming nest good boy furry tongue heel furry
          treats fish. Cage run fast kitten dinnertime ball run foot park fleas
          throw house train licks stick dinnertime window. Yawn litter fish yawn
          toy pet gate throw Buddy kitty wag tail ball groom crate ferret heel
          wet nose Rover toys pet supplies. Bird Food treats tongue lick teeth
          ferret litter box slobbery litter box crate bird small animals yawn
          small animals shake slobber gimme five toys polydactyl meow. Turtle
          cage lazy cat foot lazy cat groom canary window tooth brush bedding
          lazy cat pet supplies turtle water dog shake pet supplies kitty. Walk
          bird harness wet nose meow harness grooming water dog lol catz water
          bedding toys bird seed fetch lazy cat. Parakeet scratcher brush
          biscuit lick dog tooth walk food lazy cat biscuit. Cockatiel Snowball
          kitten Rover ferret puppy.
        </p>
        <PgAdmonition class="pg-mt-4" styleType="info">
          This is some useful info to get you going on this form.
        </PgAdmonition>
        <PgInput value="Initial value" class="pg-mt-6" />
        <hr class="pg-mt-4" />
        <PgButton class="pg-mt-4">Clickity</PgButton>
      </section>
      <section class="pg-mw-content ml-auto mr-auto pr-6 pl-6">
        <h2 class="pg-text-heading pg-mt-10">Foo</h2>
        <hr class="pg-mt-4" />
        <p class="pg-text-body pg-mt-4">
          Pet Food pet supplies gimme five puppy cage food feathers food heel
          feathers running pet gate walk lazy dog Spike. Good Boy park lazy dog
          walk kibble Scooby snacks licks canary. Maine Coon Cat walk catch
          water dog slobber chew scratcher ID tag litter tuxedo dog house lazy
          cat park. Dinnertime fetch throw feathers fleas tongue lazy cat lick
          throw kitten parrot hamster wag tail aquarium chew heel good boy lick
          feathers cockatiel. Wet Nose food ferret vaccine finch vaccination
          Scooby snacks string wagging barky tail head good boy pet gate meow
          good boy. Commands shake bird biscuit left paw finch bark ferret bark
          gimme five turtle fur canary. Water puppy dog lick kisses pet supplies
          slobber cat bird seed. Food sit biscuit groom tongue cage.
        </p>
        <PgAdmonition class="pg-mt-4" styleType="critical">
          Oh no, something went wrong with this form.
        </PgAdmonition>
        <PgInput value="Initial value" class="pg-mt-6" invalid />
        <hr class="pg-mt-4" />
        <PgButton class="pg-mt-4">Clickity</PgButton>
      </section>
      <section class="pg-mw-content ml-auto mr-auto pr-6 pl-6">
        <h2 class="pg-text-heading pg-mt-10">Bar</h2>
        <hr class="pg-mt-4" />
        <p class="pg-text-body pg-mt-4">
          Play Dead sit nap lazy dog wet nose Tigger run fast fish lazy cat
          wagging hamster toy field yawn feathers ferret yawn aquarium.Feathers
          bird seed food scratcher mouse running teeth licks heel walk pet gate
          maine coon cat collar twine parakeet. Roll Over kitty barky critters
          litter stick window litter box wagging field toy. Whiskers harness
          biscuit food lick small animals throw meow house train. Bedding field
          hamster small animals carrier polydactyl groom vaccine. Commands
          running gimme five groom slobber run fast head ball litter box biscuit
          catch run fast roll over. Roll Over litter box tabby pet slobbery play
          dead kitty roll over small animals barky good boy string kitty fish
          licks teeth chew drool. ID Tag barky lick parakeet wet nose ball walk
          tabby wag tail chirp nest. Spike bird seed water teeth leash ball.
          Crate pet food stripes carrier drool slobbery tabby dog puppy birds
          walk roll over bird food Mittens pet supplies.
        </p>
        <PgAdmonition class="pg-mt-4" styleType="warning">
          Proceed with cation. This is your warning.
        </PgAdmonition>
        <PgInput value="Initial value" class="pg-mt-6" readonly />
        <hr class="pg-mt-4" />
        <PgButton class="pg-mt-4" busy>
          Clickity
        </PgButton>
      </section>
      <div class="pg-mt-10"></div>
      <PgAdmonition
        class="pg-fixed pg-right-6 pg-bottom-6 pg-shadow"
        styleType="success"
      >
        Success submitting your form!
      </PgAdmonition>
    </>
  );
};

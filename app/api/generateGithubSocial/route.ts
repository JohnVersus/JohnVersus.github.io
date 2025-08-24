import { createCanvas, GlobalFonts, Image } from '@napi-rs/canvas';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const repo_url = searchParams.get('repo_url');

    if (!repo_url) {
      return new NextResponse('repo_url query parameter is required', {
        status: 400,
      });
    }

    // Get the repository name and owner from the URL
    const clean_url =
      decodeURIComponent(repo_url as string).substring(
        (repo_url as string).length - 1,
      ) == '/'
        ? (repo_url as string).slice(0, -1)
        : repo_url;
    const parts = (clean_url as string).split('/');
    const owner = parts[parts.length - 2];
    const repo_name = parts[parts.length - 1];

    // Call the GitHub API to get the repository metadata
    const api_url = `https://api.github.com/repos/${owner}/${repo_name}`;
    const response = await fetch(api_url);

    // Check if the API call was successful
    if (!response.ok) {
      throw new Error('Failed to fetch git repo data');
    }

    // Parse the repository metadata from the API response
    const repo_data = await response.json();

    // Get the repository description and number of stars
    const description = repo_data.description;
    const stars = repo_data.stargazers_count;
    const avatar_url = repo_data.owner.avatar_url;

    // Create a new canvas for the social image
    const [width, height] = [1920, 960];
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');

    // dimesnions
    const imgBoundary = 75;
    const x_pos = 50 + imgBoundary;
    const top_padding = 115; // measured from top
    const bottom_padding = 820; // measured from top
    const star_padding_top = imgBoundary + 100;
    const name_padding_top = bottom_padding;
    const right_content_x_pos = width - imgBoundary - 50;
    const star_format = new Intl.NumberFormat(undefined, {
      notation: 'compact',
    });

    // register a custom font
    //   const pathToFont = join(
    //     __dirname,
    //     '..',
    //     '..',
    //     'utils',
    //     'font',
    //     'Impact',
    //     'impact.ttf',
    //   );
    const pathToFont = '';
    GlobalFonts.registerFromPath(pathToFont, 'Impact');

    // set the font for the context
    const font = '80px Roboto'; // impact not used as it is not accessable in vercel
    const font_small = '60px Roboto';
    const font_mini = '40px Roboto';

    // Set the background color
    ctx.fillStyle = '#43475a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Set the card color
    ctx.fillStyle = '#292a36';
    // Calculate the dimenstions and size of the rectangle
    const x = imgBoundary;
    const y = imgBoundary;
    const w = canvas.width - 2 * imgBoundary;
    const h = canvas.height - 2 * imgBoundary;
    const r = 20; // radius of the rounded corners

    // Draw the rectangle with rounded corners and a shadow
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.arcTo(x + w, y, x + w, y + r, r);
    ctx.lineTo(x + w, y + h - r);
    ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
    ctx.lineTo(x + r, y + h);
    ctx.arcTo(x, y + h, x, y + h - r, r);
    ctx.lineTo(x, y + r);
    ctx.arcTo(x, y, x + r, y, r);
    ctx.closePath();
    ctx.fillStyle = '#292a36';
    ctx.shadowColor = 'black';
    ctx.shadowOffsetX = 5;
    ctx.shadowOffsetY = 5;
    ctx.shadowBlur = 10;
    ctx.fill();
    ctx.stroke();

    // remove shadow properties
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 0;

    //   ctx.fillRect(
    //     imgBoundary,
    //     imgBoundary,
    //     canvas.width - 2 * imgBoundary,
    //     canvas.height - 2 * imgBoundary,
    //   );

    // Add the repository name to the image
    ctx.fillStyle = '#4be670';
    ctx.font = font;
    const fixed_repo_name =
      repo_name[0].toUpperCase() +
      repo_name.replaceAll('-', ' ')?.replaceAll('_', ' ')?.slice(1);

    ctx.fillText(
      fixed_repo_name.length > 35
        ? fixed_repo_name.substring(0, 35) + '...'
        : fixed_repo_name,
      x_pos,
      top_padding + imgBoundary,
    );

    // Add the repository description to the image
    ctx.fillStyle = '#ffffff';
    ctx.font = font_small;

    const description_array = (description as string)?.split(' ');
    //   const english = /^[A-Za-z0-9]*$/;
    const max_words = 7;
    if (description_array && description_array.length) {
      let line1 = description_array
        .slice(0, max_words)
        .toString()
        .replaceAll(',', ' ');
      let line2 = description_array
        .slice(max_words * 1, max_words * 2)
        .toString()
        .replaceAll(',', ' ');
      let line3 = description_array
        .slice(max_words * 2, max_words * 3)
        .toString()
        .replaceAll(',', ' ');
      let line4 = description_array
        .slice(max_words * 3, max_words * 4)
        .toString()
        .replaceAll(',', ' ');
      let line5 =
        description_array.length > max_words * 5
          ? description_array
              .slice(max_words * 4, max_words * 5)
              .toString()
              .replaceAll(',', ' ') + '...'
          : description_array
              .slice(max_words * 4, max_words * 5)
              .toString()
              .replaceAll(',', ' ');

      //   let line1 = '';
      //   let line2 = '';
      //   let line3 = '';
      //   const max
      //   for (let i = 0; i < description_array.length; i++ ){

      //   }
      const line_incriment = 80;

      ctx.fillText(line1, x_pos, top_padding * 2 + imgBoundary);
      ctx.fillText(
        line2,
        x_pos,
        top_padding * 2 + imgBoundary + line_incriment,
      );
      ctx.fillText(
        line3,
        x_pos,
        top_padding * 2 + imgBoundary + line_incriment * 2,
      );
      ctx.fillText(
        line4,
        x_pos,
        top_padding * 2 + imgBoundary + line_incriment * 3,
      );
      ctx.fillText(
        line5,
        x_pos,
        top_padding * 2 + imgBoundary + line_incriment * 4,
      );
    }

    // Add the number of stars to the image
    ctx.font = font_small;
    if (stars > 0) {
      // Draw a star shape
      // Define the size and position of the star shape
      const starsize = 55;
      const x = right_content_x_pos - starsize;
      const y = star_padding_top - starsize;
      ctx.beginPath();
      ctx.moveTo(x + starsize * 0.5, y);
      ctx.lineTo(x + starsize * 0.6, y + starsize * 0.4);
      ctx.lineTo(x + starsize, y + starsize * 0.4);
      ctx.lineTo(x + starsize * 0.7, y + starsize * 0.6);
      ctx.lineTo(x + starsize * 0.8, y + starsize);
      ctx.lineTo(x + starsize * 0.5, y + starsize * 0.75);
      ctx.lineTo(x + starsize * 0.2, y + starsize);
      ctx.lineTo(x + starsize * 0.3, y + starsize * 0.6);
      ctx.lineTo(x, y + starsize * 0.4);
      ctx.lineTo(x + starsize * 0.4, y + starsize * 0.4);
      ctx.closePath();

      // Set the stroke style to blue
      ctx.strokeStyle = 'gold';
      // create gradient fill color
      const gradient = ctx.createRadialGradient(100, 100, 0, 100, 100, 100);
      gradient.addColorStop(0, 'yellow');
      gradient.addColorStop(1, 'gold');
      ctx.fillStyle = gradient;
      // Set the line width to 2 pixels
      ctx.lineWidth = 2;

      // Draw the color of the star shape
      ctx.stroke();
      ctx.fill();

      ctx.fillStyle = '#ffffff';
      const stars_text = `${star_format.format(stars)}`;
      const stars_text_width = ctx.measureText(stars_text).width;
      ctx.fillText(
        stars_text,
        right_content_x_pos - stars_text_width - starsize - 10,
        star_padding_top,
      );
    }
    //   else {
    //     const stars_text = '✨';
    //     const stars_text_width = ctx.measureText(stars_text).width;
    //     ctx.fillText(
    //       stars_text,
    //       right_content_x_pos - stars_text_width,
    //       star_padding_top,
    //     );
    //   }

    const languagesRes = await fetch(repo_data.languages_url);
    // Check if the API call was successful
    if (!languagesRes.ok) {
      throw new Error('Failed to fetch git repo data');
    }

    // Parse the repository metadata from the API response
    const languages: JSON = await languagesRes.json();

    // Add the language names to the image
    ctx.font = font_mini;
    const langNames = Object.keys(languages).slice(0, 3).reverse();
    if (langNames.length) {
      const langvalues = Object.values(languages).slice(0, 3).reverse(); // 3 is the max value
      const langTotalWeight = Number(langvalues.reduce((a, b) => a + b));
      let langLenght = langNames.length; // always 3
      for (let i = 0; i < langLenght; i++) {
        const langWeight = (Number(langvalues[i]) / langTotalWeight) * 100;
        ctx.fillStyle = '#4be670';
        const first_text = langNames[i] + ': ';
        const first_text_width = ctx.measureText(first_text).width;
        ctx.fillText(first_text, x_pos, bottom_padding - i * 50);

        ctx.fillStyle = '#ffffff';
        const second_text = langWeight.toFixed(2).toString() + ' %';
        ctx.fillText(
          second_text,
          x_pos + first_text_width + 10,
          bottom_padding - i * 50,
        );
      }
    }

    // User name on the image
    ctx.font = font_mini;
    ctx.fillStyle = '#818487';
    const owner_text_width = ctx.measureText(owner).width;
    ctx.fillText(
      owner,
      right_content_x_pos - owner_text_width,
      name_padding_top,
    );

    // Load the image
    const image = new Image();
    const avatar_data = await fetch(avatar_url);
    const avatar_blob = await avatar_data.arrayBuffer();
    image.src = Buffer.from(avatar_blob);
    image.height = 100;
    image.width = 100;

    // Define the center coordinates and radius of the circle
    const centerX = right_content_x_pos - image.width;
    const centerY = name_padding_top - image.height - 50;
    const radius = image.width / 2;

    // Save the current canvas state
    ctx.save();

    // Create a clipping path in the shape of a circle
    ctx.beginPath();
    ctx.arc(centerX + radius, centerY + radius, radius, 0, 2 * Math.PI);
    ctx.clip();

    // Draw the image inside the clipping path
    ctx.drawImage(
      image,
      right_content_x_pos - image.width,
      name_padding_top - image.height - 50,
      100,
      100,
    );

    // Restore the canvas state
    ctx.restore();

    // Convert the canvas to a PNG image
    const image_data = canvas.toBuffer('image/png');

    // Send the image data as a response
    return new NextResponse(image_data, {
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 's-maxage=120, stale-while-revalidate',
      },
      status: 200,
    });
  } catch (e) {
    if (e instanceof Error) {
      console.trace(e.message);
      return new NextResponse(e.message, { status: 400 });
    }
    return new NextResponse('An unknown error occurred', { status: 500 });
  }
}

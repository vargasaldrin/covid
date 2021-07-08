interface Blog {
  title: string;
  date: string;
  post: string;
  like: string;
}

interface BlogData extends Array<Blog> {}

export const blogData: BlogData = [
  {
    title: "Blog Post 1",
    date: "March 20, 2020",
    post: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mattis, purus ut dignissim vulputate, lectus nisi ultricies dolor, sit amet egestas tellus leo pellentesque justo. Mauris sed quam ornare, molestie diam pellentesque, elementum tellus. Cras nunc quam, luctus ac quam sed, semper faucibus ligula. Praesent et neque suscipit nibh sodales varius non vel nunc. Sed fermentum a diam vitae aliquet. Etiam iaculis malesuada neque a imperdiet. Curabitur dictum non purus eu convallis. Sed ac sagittis dui. Suspendisse tristique leo egestas orci finibus tempor.

    Nunc in pharetra mauris. Donec eu orci at magna condimentum fermentum. Etiam commodo orci nisi, a vehicula magna cursus vitae. Mauris tempus lacus vel nisl suscipit, in semper quam euismod. Vestibulum maximus quis augue vel aliquet. Fusce lacinia, risus non aliquet sollicitudin, leo metus pulvinar mi, eget facilisis urna turpis vitae erat. Integer elit purus, pellentesque et dictum non, fringilla quis dui. Integer commodo elementum finibus. Donec a massa ut ipsum rhoncus imperdiet. Ut eget rutrum erat. Aliquam erat volutpat. Aliquam luctus sit amet mi vehicula facilisis. Nulla auctor ante urna, quis faucibus odio egestas eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed a metus in est iaculis condimentum. Nullam bibendum, tortor ac vestibulum egestas, dui dui molestie nulla, ac suscipit erat elit vitae odio.
    
    Cras non volutpat sapien. Vivamus nec lacus tempor, dapibus dolor eu, interdum massa. Suspendisse volutpat consequat sodales. Nam nibh neque, cursus in metus sit amet, facilisis eleifend magna. Sed a ligula volutpat sem facilisis sagittis. Aliquam risus felis, fringilla at blandit sit amet, tempor eget libero. Ut tincidunt ultricies malesuada. Morbi mattis sit amet purus vel convallis. Cras malesuada maximus dolor, porttitor lobortis ex porta sed. Integer iaculis ante diam, sed ornare ligula eleifend aliquam. Duis feugiat ligula ligula, quis tempor mi cursus eget. Sed consectetur consequat blandit. Nullam nec fringilla lectus, quis tempor tortor. Suspendisse sed sem non eros ultricies vestibulum. Suspendisse id dui venenatis, vehicula lacus at, mattis erat. Cras vitae efficitur ante, in eleifend tortor.`,
    like: "world",
  },
  {
    title: "Blog Post 2",
    date: "June 2, 2020",
    post: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt urna sit amet laoreet accumsan. Phasellus fermentum, enim mollis sagittis fringilla, nunc est consequat lectus, quis congue odio nisi sit amet erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in lacinia justo. Aenean et ex ac velit egestas suscipit vitae pellentesque enim. Aenean turpis nisl, tempus vitae augue sit amet, feugiat cursus mauris. Nulla fermentum egestas orci non efficitur. Donec in ex semper, ornare velit non, fringilla orci. Maecenas aliquam est id eros luctus, vel efficitur dolor tincidunt.

Morbi interdum vestibulum lorem, aliquet pulvinar nulla dictum non. Phasellus eleifend lacus ut ex tristique, quis gravida mi faucibus. Nulla dignissim erat lectus, eu sollicitudin nulla ornare ut. Donec laoreet nisi id risus elementum mollis. Aenean dapibus consequat justo ut convallis. Phasellus arcu tortor, tempus at semper sed, sodales sit amet dui. Fusce vitae orci sit amet enim condimentum efficitur.

Aenean posuere, libero vitae aliquam interdum, orci tellus finibus est, eget commodo ligula tellus at purus. Curabitur suscipit nulla nibh, eget tristique nibh ultrices eget. Integer auctor faucibus ultricies. Proin tristique sit amet lorem at malesuada. Proin id suscipit diam. Proin sapien nunc, fringilla non mi sed, tincidunt iaculis ex. Mauris eget leo non lorem volutpat posuere vitae sed nisi. Phasellus ac scelerisque orci.`,
    like: "true",
  },
  {
    title: "Blog Post 3",
    date: "November 7, 2020",
    post: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eleifend orci nec massa egestas, a fringilla metus vehicula. Duis finibus elit vel metus eleifend, eu tincidunt orci condimentum. Aenean luctus neque tortor, id hendrerit ante placerat eget. Suspendisse metus elit, posuere et pharetra tincidunt, suscipit et ex. Duis eu quam sed ligula vehicula venenatis ac eu elit. Nam pellentesque tortor lobortis, tempus quam eget, lobortis tortor. Nunc fermentum risus convallis fermentum molestie. Maecenas ultrices ipsum turpis, vel ornare nisi venenatis quis. Aenean convallis quam sed justo imperdiet, at cursus sapien posuere. Vivamus tempor urna ac leo varius, in pretium enim rhoncus.

    Phasellus vel diam elit. Fusce quis dui molestie, accumsan elit vitae, pulvinar mi. Suspendisse imperdiet magna eu fermentum lacinia. In id ante rutrum justo tincidunt volutpat. Donec interdum diam eget ipsum mollis semper. Morbi viverra eu elit vitae imperdiet. Vivamus eu felis mi. Nulla facilisi. Proin quis auctor velit. Aliquam tempus vehicula varius. Donec suscipit turpis ut nunc ultrices lobortis.
    
    In cursus tincidunt eros ut maximus. Quisque maximus eros ut dui porta, vel aliquam dolor eleifend. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent in ex est. Aenean elementum lorem nunc, at consequat libero suscipit et. Sed a ex dolor. Donec ut nisl malesuada, pharetra ex vitae, commodo tellus. Ut ultrices dui et volutpat placerat. Nunc et arcu finibus, fermentum tortor vitae, commodo nunc. Nullam risus odio, consectetur vel auctor vitae, tristique eu urna. Proin non sodales dolor, non porta mauris. Quisque interdum imperdiet dui a luctus. Praesent eget finibus enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut volutpat, tellus et dignissim bibendum, arcu quam ultrices mauris, quis pharetra magna sapien eget felis. Donec varius aliquam leo nec tempus.`,
    like: "true",
  },
  {
    title: "Blog Post 4",
    date: "April 1, 2020",
    post: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam condimentum maximus ex. Nullam purus erat, sodales sit amet ligula nec, euismod vehicula ante. Fusce iaculis, mauris sed convallis tincidunt, urna magna posuere massa, et vulputate velit quam ut est. Maecenas ut lorem et dolor auctor feugiat nec ac tellus. Nullam sit amet nulla fringilla, gravida orci et, tempor lorem. Fusce a imperdiet mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc ut dolor ullamcorper, egestas odio eget, molestie urna. Etiam a turpis nunc. Nulla et sapien nec risus ornare vulputate. Aliquam venenatis arcu a eros ultrices, id tristique mi mattis. Suspendisse volutpat aliquet justo finibus posuere. Sed sed nulla vulputate ipsum tincidunt ullamcorper.

    In hac habitasse platea dictumst. Fusce id justo lacus. Maecenas tempor suscipit tortor, eget blandit erat. Maecenas nec libero tristique, accumsan enim at, dapibus magna. Nulla vel sapien dapibus velit consequat facilisis ac venenatis lorem. Ut auctor dui a aliquet tempus. Cras vel blandit elit. Donec eget purus id tellus vestibulum dignissim non eu dui. Aenean placerat imperdiet ultrices. Praesent vestibulum ipsum augue, ac maximus diam facilisis ac. Fusce ullamcorper at urna nec gravida. Etiam mattis hendrerit blandit.
    
    Curabitur in blandit eros. Aliquam semper varius urna, et rutrum velit dapibus at. Pellentesque ac elit lorem. Aliquam pretium eget metus id posuere. Nunc cursus lectus vitae ex euismod, quis accumsan ligula tristique. Duis dui mi, posuere sit amet est vel, consectetur condimentum eros. Cras ullamcorper fringilla quam eget venenatis. Fusce ac neque vel justo interdum malesuada posuere sit amet mi.`,
    like: "true",
  },
];

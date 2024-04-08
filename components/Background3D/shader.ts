export const holographicVertexShader = /* glsl */ `
    varying vec3 vPosition;

    void main() {
        vec4 modelPosition = modelMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * viewMatrix * modelPosition;
        vPosition = modelPosition.xyz;
    }
`;

export const holographicFragmentShader = /* glsl */ `
    varying vec3 vPosition;

    void main() {
        float stripes = vPosition.y - 2.0;
        gl_FragColor = vec4(stripes, stripes, stripes, 1.0);

        #include <tonemapping_fragment>
        #include <colorspace_fragment>
    }
`;
